import ROUTES from "../utilities/api-routes";
const fetcher  = async (url) => {
    const baseUrl = process.env.REACT_APP_API_URL;
    let response = null
    try {
      response = await fetch(baseUrl + url)
      const json = await response.json();
      if (response.ok) {
        return {data: json}
      }
      throw new Error(json.messages)

    }catch(e){
      throw new Error(e.messages)
    }
}

const api  = {
    get(url){
        return fetcher(url);
    },
    getAllProducts(){
        return this.get(ROUTES.getAllProducts())
    },

}
export default api;