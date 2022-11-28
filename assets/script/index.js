'use strict';

import Contact from './Contact.js'
// con document get by id traigo del dom mi informacion del boton y despues con el add
//eventlistener escucho la propiedad del evento en este caso click y llamo la funcion new Conact.
document.getElementById('submit-btn').addEventListener("click", newContact);

let arrayObj=[] ;
let errormsm = '';

//mi constante para incrementar los usuarios que voy agregando
const contactzone = document.getElementById('contactzone') ;

/* Function validate data and email*/
function validateQuantity(data) {    
    let arrayData = data.split(",");    //separa el string y lo convierte en posicion en array 

    if(arrayData.length < 3){
         errormsm = 'Write all data required separated with commas';
    } else {
        let regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexp.test(arrayData[2].trim())){
            errormsm = 'Email is not valid';
        }
    }    
    return errormsm != '' ? false : true;

}

/* Function Organize Contact*/
function listContacts(){
    let container = document.getElementById('contactZone');
    let div = document.createElement('div');
    div.classList.add('contact-item');
    div.innerHTML = `
        <p>Name : ${arrayObj[0].name} </p>
        <p>City : ${arrayObj[0].city} </p>
        <p>Email : ${arrayObj[0].email} </p>
    `;
    container.prepend(div);
}

/* Function New Contact*/
function newContact(){    
    let data = document.getElementById('entrytext').value;
    //validate data
    if (validateQuantity(data)){
        let arrayData = data.split(",");                 
        let contact = new Contact(arrayData[0],arrayData[1],arrayData[2]);
        document.getElementById('message').innerHTML= "";
        arrayObj.unshift(contact);
        console.log('objeto: ' , contact);
        console.log('array: ' , arrayObj);
        
        listContacts();

    }   else {
        document.getElementById('message').innerHTML= errormsm;
        errormsm='';
    }
}
