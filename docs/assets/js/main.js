"use strict";const inputSelector=document.querySelector(".main__input"),btnSelector=document.querySelector(".main__btn"),listSelector=document.querySelector(".result__list");function searcher(){fetch(`https://api.github.com/users/${inputSelector.value}`).then(function(e){return console.log(e),404===e.status&&(listSelector.innerHTML="",listSelector.innerHTML='<div class="message"> Lo siento, no hemos encontrado a esta criatura en el sistema.</div>'),e.json()}).then(function(e){if(null===e.name)listSelector.innerHTML="",listSelector.innerHTML='<div class="message">Lo siento, esta criatura prefiere permanecer en el anonimato.</div>';else{const t=e.name.split(" ")[0];console.log(t),listSelector.innerHTML="";for(let e=0;e<t.length;e++)listSelector.innerHTML+=`<li class="result__box"> ${t[e]}</li>`}})}btnSelector.addEventListener("click",searcher);