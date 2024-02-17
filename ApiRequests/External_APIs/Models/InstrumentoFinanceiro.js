"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentoFinanceiro = void 0;
class InstrumentoFinanceiro {
    constructor(nome, tipo, pais, indice, bolsa, valorAtual, data) {
        this.nome = nome;
        this.tipo = tipo;
        this.indice = indice;
        this.pais = pais;
        this.bolsa = bolsa;
        this.valorAtual = valorAtual;
        this.data = data;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getIndice() {
        return this.indice;
    }
    setIndice(indice) {
        this.indice = indice;
    }
    getPais() {
        return this.pais;
    }
    setPais(pais) {
        this.pais = pais;
    }
    getBolsa() {
        return this.bolsa;
    }
    getValorAtual() {
        return this.valorAtual;
    }
    getData() {
        return this.data;
    }
}
exports.InstrumentoFinanceiro = InstrumentoFinanceiro;
console.log('caminho 1');
