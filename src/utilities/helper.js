import moment from 'moment-timezone';
import getSymbolFromCurrency from 'currency-symbol-map'


// export const currentTime = (currentTiming) => {
//     //const zone = "America/Mexico_city"  // set Mexico timezone
//     const zone = "Asia/Calcutta"          // set India timezone
//     let currentTime = moment().tz(zone).format('HH:mm')
//     currentTime = moment(currentTime,'HH:mm')
// }


export const convertUtcToIst = (utcDateTime,format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment.utc(utcDateTime).utcOffset('+05:30').format(format);
};
  
  // Function to convert IST to UTC
export const convertIstToUtc = (istDateTime, format = 'YYYY-MM-DD HH:mm:ss') => {
    return moment(istDateTime).utc().format(format);
};
  
export const priceWithCurrency = (price, symbol = 'USD', prefix = true) =>{
    // For check symbol use console.log(currencyToSymbolMap)
    return prefix ? `${getSymbolFromCurrency(symbol)}${price}` : `${price}${getSymbolFromCurrency(symbol)}`
}