import axios from "axios";


export const statusMarket = (url: string) =>{
    axios.get(url)
        .then((res) => {
            const resposta = res.data
            console.log(resposta)
        })
}
