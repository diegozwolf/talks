/// Modo Event delegation: Se agrega un Event listener al padre
(function() {
    'use strict';
    var books = document.querySelector('#books');
    books.addEventListener('click', function(e){
        console.log(e);
        if (e.target){
            console.log(e.target.innerText, 'fue clickeado con Event delegation')
        }
    }, false);

}) ();

/// selecionar nodos específicos

/*(function() {
    'use strict';
    var books = document.querySelector('#books');
    books.addEventListener('click', function(e){
        console.log(e);
        if (e.target){
            if (e.target.matches('a#book4')) {
                console.log(e.target.innerText, 'Comprar libro: https://cdn.meme.am/instances/500x/11276407.jpg');
            }
            else {
                console.log(e.target.innerText, 'fue clickeado con Event delegation');
            }
            
        }
    }, false);

}) ();*/




/// Modo sin event delegation: se debe agregar un event listener a cada elemento

/*(function() {
    'use strict';
    var book1 = document.querySelector('#book1');
    var book2 = document.querySelector('#book2');
    var book3 = document.querySelector('#book3');
    var book4 = document.querySelector('#book4');
    var book5 = document.querySelector('#book5');

    book1.addEventListener('click', function(){
        console.log(book1.innerText, 'fue clickeado')       
    }, false);

    book2.addEventListener('click', function(){
        console.log(book2.innerText, 'fue clickeado')       
    }, false);

    book3.addEventListener('click', function(){
        console.log(book3.innerText, 'fue clickeado')       
    }, false);

    book4.addEventListener('click', function(){
        console.log(book4.innerText, 'fue clickeado')       
    }, false);

    book5.addEventListener('click', function(){
        console.log(book5.innerText, 'fue clickeado')       
    }, false);

}) ();
    
*/