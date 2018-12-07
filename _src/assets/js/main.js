'use strict';

const inputSelector= document.querySelector('.main__input');
const btnSelector= document.querySelector('.main__btn');
const listSelector= document.querySelector('.result__list');

function searcher(){
    fetch(`https://api.github.com/users/${inputSelector.value}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) { 

        const dataName = data.name;
        // const dataArrName = dataName.split(" ");
        // console.log(dataName.split(" ")[0]);
        // console.log(dataArrName);
        // const dataFirstName = dataArrName[0];
        const dataFirstName = dataName.split(" ")[0];
        console.log(dataFirstName);
        for (let i=0; i<dataFirstName.length; i++){
            listSelector.innerHTML += `<li class="result__box"> ${dataFirstName[i]}</li>`;
        }
    });
    
} 

btnSelector.addEventListener('click', searcher);

//recoger del input el nick de una usuaria de GitHub. 
//Al hacer click en el botón "Buscar" 
//pedir a Github la información que tienen sobre dicha usuaria 
//De la información que recibamos seleccionaremos el nombre real de la criatura ﴾sin los apellidos﴿ 
//escribiremos cada letra en un li de una lista ordenada.