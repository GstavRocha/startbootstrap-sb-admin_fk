"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const markets_utils_1 = require("./Utils/markets_utils");
require("dotenv/config");
const Links_Treatment_1 = require("./Links/Links_Treatment");
const APIKEY = process.env.API_KEY_ALPHAVANTAGE;
const statusUrl = (0, Links_Treatment_1.URL_AUTH_GLOBAL_MARKET)(APIKEY);
(0, markets_utils_1.statusMarket)(statusUrl);
