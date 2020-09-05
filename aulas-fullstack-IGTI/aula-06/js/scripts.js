window.addEventListener('load', start);//carregando apagina


function start(){
    console.log('aula 04');
    console.log('pagina carregada')

    const span = document.querySelector('#nameLength'); // elecionando o ID do elemento html
    var nameImput = document.querySelector('#nameImput');//delecuonando o imput HTML
    nameImput.addEventListener('keyup', countName);

    var form = document.querySelector('form');
    form.addEventListener('submint', preventSubmint);
}


function countName(vent){
    var conut = event.target.value

    const span = document.querySelector('#nameLength'); // elecionando o ID do elemento html
    span.textContent = conut.length;
  
}
function preventSubmint(event){
event.preventDefault();

var nameImput = document.querySelector('#nameImput');
alert(nameImput.value + 'cadastrado com sucesso');

}