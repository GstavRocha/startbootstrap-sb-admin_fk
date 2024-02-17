import {getNames, setApiAuthAlha} from "./External_APIs/External_Routes/routesGets";
import {URL_ALPHAVANTAGE as APLHA, URL_STATUS_GLOBAL_MARKET as MARKET} from "./Links/links";
import 'dotenv/config';

const APIKEY:string| undefined= process.env.API_KEY_ALPHAVANTAGE

setApiAuthAlha(APIKEY,MARKET)
getNames();
