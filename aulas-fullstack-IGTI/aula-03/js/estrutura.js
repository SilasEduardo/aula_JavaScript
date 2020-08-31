/*var a = 5;
var b = 6;


if(a > b){
    console.log(a + ' é maior que '+ b);
}else{
    if(a < b ){
    console.log(b + ' é maior que ' + a);
    }else{console.log('os numeros são iguais!')}
}

var dia = 5
if (dia === 1){
    console.log('domingo')
}
else if (dia === 2){
    console.log('Segunda')
}
else if (dia === 3){
    console.log('Terça')
}
else if (dia === 4){
    console.log('Quarta')
}
else if (dia === 5){
    console.log('Quinta')
}
else if  (dia === 6){
    console.log('Sexta')
}
else if( dia === 7){
    console.log('Sabado');
}


var day;
switch (new Date().getDay()){
    case 0:
        day = "domingo"
        break
    case 1:
        day = "Segunda-Feira"
        break
    case 2:
        day = "Terça-Feira"
        break
    case 3:
        day = "Quarta-Feira"
        break
    case 4:
        day = "Quinta-Feira"
        break
    case 5:
        day = "Sexta-Feita"
        break
    case 6:
        day = "Sabado" 
}

document.getElementById("diaDaSemana").innerHTML = "Hoje é " + day;

var a = 2
var b = 3


var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
*/

var x = 1;
var somatorio = 0;

while(x <= 10){
    somatorio += x;
    x ++ ;
}

console.log(somatorio);

var x = 1;
var somatorio = 0;


do{
    somatorio += x
    x++ ;
}while(x <= 10);

console.log(somatorio);

var somatorio = 0;


for(numeroAtual = 1; numeroAtual <= 10; numeroAtual++){
    somatorio += numeroAtual;
}
console.log(somatorio)
