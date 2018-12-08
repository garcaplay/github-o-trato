'use strict';

const inputSelector= document.querySelector('.main__input');
const btnSelector= document.querySelector('.main__btn');
const listSelector= document.querySelector('.result__list');

function searcher(){
    //pedir a Github la información que tienen sobre dicha usuaria
    fetch(`https://api.github.com/users/${inputSelector.value}`)
    .then(function(response) {
        console.log(response);
        //si la usuaria no existe: sale un mensaje "Lo siento, no hemos encontrado a esta criatura"
        if(response.status === 404){
            listSelector.innerHTML = '';
            listSelector.innerHTML = `<div class="message"> Lo siento, no hemos encontrado a esta criatura en el sistema.</div>`
        }
        return response.json();
    })
    .then(function(data) { 
        
        //si la usuaria no tiene puesto el nombre completo?: sale un mensaje "Lo siento, esta criatura prefiere permanecer en el anonimato"
        if (data.name === null){
            listSelector.innerHTML = '';
            listSelector.innerHTML = `<div class="message">Lo siento, esta criatura prefiere permanecer en el anonimato.</div>`
        }
        //De la información que recibamos seleccionaremos el nombre real de la criatura ﴾sin los apellidos﴿
        else { 
            const dataName = data.name;
            const dataFirstName = dataName.split(" ")[0];
            console.log(dataFirstName);
            listSelector.innerHTML = '';
            //escribiremos cada letra en un li de una lista ordenada.
            for (let i=0; i<dataFirstName.length; i++){
                listSelector.innerHTML += `<li class="result__box"> ${dataFirstName[i]}</li>`;
            }
        }
        
    });
    
} 

//recoger del input el nick de una usuaria de GitHub. 
//Al hacer click en el botón "Buscar"
btnSelector.addEventListener('click', searcher);




/// Usuario que AHORA NO EXISTE PERO EXISTIÓ
/// https://api.github.com/users/asdfasdfa

/// NO EXISTE
/// https://api.github.com/users/32413ur89sdfasdfa
 

