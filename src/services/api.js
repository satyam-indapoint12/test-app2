import ROUTES from "../utilities/api-routes";
import { toast } from 'react-toastify';
import { renderToString } from 'react-dom/server';
import ErrorMessages from "../shared/error-messages";
import { ResponseStatus } from "../enums";


const fetcher  = async (url,showError= true, method = "GET", body) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  };


    const baseUrl = process.env.REACT_APP_API_URL;
    let response = null
    try {
      response = await fetch(baseUrl + url,options)
      const json = await response.json();
      if(response.status === ResponseStatus[404]){
        throw new Error(renderToString(<ErrorMessages message={'notfound'} />))
      }
      if(response.status === ResponseStatus[400]){
        throw new Error(renderToString(<ErrorMessages message={'badRequest'} />))
      }
      if(response.status === ResponseStatus[500]){
        throw new Error(renderToString(<ErrorMessages message={'serverError'} />))
      }
      if (response.ok) {
        return {data: json}
      }
      showError && toast.error(json.messages)
      throw new Error(json.messages)

    }catch(e){
      showError && toast.error(e.message || e.stack)
      throw new Error(e.message || e.stack)
    } 
}

const api  = {
    get(url, showError = true){
        return fetcher(url,showError);
    },
    post(url, data,showError = true) {
      return fetcher(url,showError, "POST", data);
    },
    getAllProducts(){
        return this.get(ROUTES.getAllProducts())
    },

}
export default api;