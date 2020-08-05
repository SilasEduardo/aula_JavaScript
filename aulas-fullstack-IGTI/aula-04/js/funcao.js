var title = document.querySelector('h1');

title.textContent = 'Silas de Paula'



var data = Array.from(document.querySelectorAll('.b'));

for( var i = 0; i < data.length; i++){
    currentElement = data[i];

    currentElement.classList.add('emphasis');


}