"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusMarket = void 0;
const axios_1 = __importDefault(require("axios"));
const statusMarket = (url) => {
    axios_1.default.get(url)
        .then((res) => {
        const resposta = res.data;
        console.log(resposta);
    });
};
exports.statusMarket = statusMarket;
