"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routesGets_1 = require("./External_APIs/External_Routes/routesGets");
const links_1 = require("./Links/links");
require("dotenv/config");
const APIKEY = process.env.API_KEY_ALPHAVANTAGE;
(0, routesGets_1.setApiAuthAlha)(APIKEY, links_1.URL_STATUS_GLOBAL_MARKET);
(0, routesGets_1.getNames)();
