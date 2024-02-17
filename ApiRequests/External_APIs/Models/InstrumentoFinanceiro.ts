export  class InstrumentoFinanceiro{
    public nome: string;
    public tipo: 'fundo'|'ação'|'moeda' |'commodity';
    public pais: string;
    public indice: string;
    public bolsa: string;
    public valorAtual: number;
    public data: number
    constructor(nome: string,
                tipo: 'fundo'|'ação'|'moeda' |'commodity',
                pais: string ,
                indice: string,
                bolsa: string,
                valorAtual: number,
                data: number){
        this.nome = nome;
        this.tipo = tipo;
        this.indice = indice
        this.pais = pais;
        this.bolsa = bolsa;
        this.valorAtual = valorAtual;
        this.data = data;
    }
    public getNome(): string{
        return this.nome;
    }
    public setNome(nome: string):void{
        this.nome = nome;
    }
    public getTipo():"fundo" | "ação" | "moeda" | "commodity"{
        return this.tipo;
    }
    public  setTipo(tipo:"fundo" | "ação" | "moeda" | "commodity"): void{
        this.tipo = tipo
    }

    public getIndice(): string{
        return this.indice;
    }
    public setIndice(indice: string): void{
        this.indice = indice;
    }
    public getPais(): string{
        return this.pais;
    }
    public setPais(pais: string): void{
        this.pais = pais;
    }
    public getBolsa(): string{
        return this.bolsa;
    }
    public getValorAtual(): number{
        return this.valorAtual;
    }
    public getData(): number{
        return this.data;
    }

}
console.log('caminho 1');
