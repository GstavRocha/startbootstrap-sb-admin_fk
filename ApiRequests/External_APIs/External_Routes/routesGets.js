"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNames = exports.setApiAuthAlha = void 0;
const request_1 = __importDefault(require("request"));
let nome;
let teste = 'teste';
const setApiAuthAlha = (auth, url) => {
    const setUrl = `${url}&apikey=${auth}`;
    request_1.default.get({
        url: setUrl,
        json: true,
        headers: {
            'User-Agent': 'request'
        }
    }, (error, response, data) => {
        if (error) {
            console.error('Há um ERRO', error);
        }
        else if (response.statusCode !== 200) {
            console.log('Status', response.statusCode);
        }
        else {
            console.log(data);
        }
    });
};
exports.setApiAuthAlha = setApiAuthAlha;
function getNames() {
    console.log(teste);
}
exports.getNames = getNames;
