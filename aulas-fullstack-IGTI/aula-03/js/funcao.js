//função que soma dois números
function sum(a, b){
    return a + b;
    
}

console.log(sum(2, 6));

//função que compara 2 número se a > b retorna 1 se for menor -1 se for igual 0;
function compara(a, b){
    var maior = a > b ? 1: a < b ? -1 : 0;
    return maior
}
console.log(compara(6, 6));

//função que soma varios numeros.

function somatorio(from, upto){
    var x = 0
    for(i = from; i <= upto; i++){
    x += i;
    }
    return x;
}
console.log(somatorio(1, 10));
console.log(somatorio(5, 50));
