"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL_AUTH_GLOBAL_MARKET = void 0;
const links_1 = require("./links");
const URL_AUTH_GLOBAL_MARKET = (authKey) => {
    return `${links_1.URL_STATUS_GLOBAL_MARKET}&apikey=${authKey}`;
};
exports.URL_AUTH_GLOBAL_MARKET = URL_AUTH_GLOBAL_MARKET;
