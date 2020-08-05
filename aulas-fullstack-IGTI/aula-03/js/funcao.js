/*function sum(a, b){
    return a + b;
}

console.log(sum(2, 4));


function compareNumber(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
}


console.log(compareNumber(10, 1));


*/



function somatorio (from, upTo) {
    var sum = 0;

    for( var i = from; i <= upTo; i++){
        sum += i
    }

    return sum;
}

 30

    console.log(somatorio(1, 10))
