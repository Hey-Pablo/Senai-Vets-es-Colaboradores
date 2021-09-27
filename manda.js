'use strict';
var quantidadeCaracter;
var quantidadePeso;
var quantidadePecas;
var n1 , total, opcao;

entrada = require("readline-sync");
 while (opcao !=0){
     console.log("1 - quantidadeCaracter");
     console.log("2 - quantidadePeso");
     console.log("3 - quantidadePecas");
     console.log("0 - Sair do Programa");


     opcao = entrada.question ("Escolha uma operação: ");
 }
 switch(opcao){
    case "1":
        console.log();
    n1 = entrada.question("Digite o Valor A: ");
        if (quantidadeCaracter <3){
            console.log("quantidadeCaracter" + quantidadeCaracter + "cadasrtado com sucesso" );
               }else{
            console.log("quantidadeCaracter" + quantidadeCaracter + " não foi possivel cadastrar");
        } 
        break;
    case "2":
        console.log();
            n1 = entrada.question("Digite o Valor A: ");
        if (quantidadePeso >100){
            console.log("quantidadePeso" + quantidadePeso + "cadasrtado com sucesso" );
               }else{
            console.log("quantidadePeso" + quantidadePeso + " não foi possivel cadastrar");
        }
        break;
    case "3":
        console.log();
            n1 = entrada.question("Digite o Valor A: ");
        if (quantidadePecas > 10){
            console.log("quantidadePecas" + quantidadePecas + " cadasrtado com sucesso" );
               }else{
            console.log("quantidadePecas" + quantidadePecas + " não foi possivel cadastrar");
               }
            break;
    case "0":
        console.log("Obrigado por usar nossa Calculadora!!!");
        break;
    default:
        console.log("Valor digitado Inválido!");
}