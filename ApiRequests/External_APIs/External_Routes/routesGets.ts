import {InstrumentoFinanceiro} from "../Models/InstrumentoFinanceiro";
import request from 'request';
import axios from "axios";
let nome: InstrumentoFinanceiro["nome"];
let teste: string = 'teste';
export const setApiAuthAlha = (auth: string | undefined, url: string): any =>{
    const setUrl = `${url}&apikey=${auth}`
    request.get(
        {
            url: setUrl,
            json: true,
            headers:{
                'User-Agent': 'request'
            }
        },(error, response, data ) =>{
            if(error){
                console.error('Há um ERRO',error);
            }else if(response.statusCode !== 200){
                console.log('Status', response.statusCode);
            }else {
                console.log(data);
            }
        }
    )
}
export function getNames(){
    console.log(teste)
}

