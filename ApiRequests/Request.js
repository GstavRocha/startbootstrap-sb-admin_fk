"use strict";
const axios = require('axios');
const env = require('dotenv').config();
const URL_MarketStatus = `https://api.polygon.io/v1/marketstatus/now?apiKey=${process.env}
/v1/marketstatus/now`;
axios.get();
console.log(URL_MarketStatus);
