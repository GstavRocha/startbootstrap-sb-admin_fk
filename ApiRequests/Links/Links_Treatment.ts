import {URL_STATUS_GLOBAL_MARKET as MARKET_URL} from "./links";

export const URL_AUTH_GLOBAL_MARKET =(authKey: string | undefined): string =>{
    return `${MARKET_URL}&apikey=${authKey}`;
}
