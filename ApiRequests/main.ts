import {getNames, setApiAuthAlha} from "./External_APIs/External_Routes/routesGets";
import {URL_ALPHAVANTAGE as APLHA, URL_STATUS_GLOBAL_MARKET as MARKET_URL} from "./Links/links";
import {statusMarket} from "./Utils/markets_utils";
import 'dotenv/config';
import {URL_AUTH_GLOBAL_MARKET} from "./Links/Links_Treatment";


const APIKEY:string| undefined= process.env.API_KEY_ALPHAVANTAGE;
const statusUrl:string = URL_AUTH_GLOBAL_MARKET(APIKEY);

statusMarket(statusUrl);

