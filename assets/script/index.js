'use strict';

import Contact from './Contact.js'
document.getElementById('submit-btn').addEventListener("click", newContact);

let arrayObj=[];
let errormsm = '';

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


function setup() {
    document.getElementById('buttonid').addEventListener('click', openDialog);
    function openDialog() {
        document.getElementById('fileid').click();
    }
    document.getElementById('fileid').addEventListener('change', submitForm);
    function submitForm() {
        document.getElementById('formid').submit();
    }
}


