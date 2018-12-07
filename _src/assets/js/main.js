'use strict';

const inputSelector= document.querySelector('.main__input');
const btnSelector= document.querySelector('.main__btn');
const divSelector= document.querySelector('.main__result');

function searcher(){
    
}

btnSelector.addEventListener('click', searcher);

//recoger del input el nick de una usuaria de GitHub. 
//Al hacer click en el botón "Buscar" 
//pedir a Github la información que tienen sobre dicha usuaria 
//De la información que recibamos seleccionaremos el nombre real de la criatura ﴾sin los apellidos﴿ 
//escribiremos cada letra en un li de una lista ordenada.