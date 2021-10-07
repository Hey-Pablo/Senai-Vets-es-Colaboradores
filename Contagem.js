const quantidadeDeAlunos = 14;

for(let index = 0; index <= quantidadeDeAlunos; index++){
    if(index === 0){
        console.log("O número é Zero");
    } else if(index % 2 === 0) {
        console.log("o número " + index + " é Par!");
    } else {
        console.log("O número " + index + " é Ímpar!");
    }
}