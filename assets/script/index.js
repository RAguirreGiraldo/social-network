'use strict';

import User from "./User.js";
newUser();
//document.getElementById('submit-btn').addEventListener("click", newUser);

function newUser(){
    let actualUser = new User(1,"Roberto","RobertoUser","roberto@gm.com");
    let data = actualUser.getInfo();
    console.log(data);
    //id
    document.getElementById("userposted").innerHTML= data[1];
    
}


/*id
document.getElementById("user").innerHTML= JSON.stringify(x);
//name
document.getElementById("user").innerHTML= x.name;
//username
document.getElementById("user").innerHTML= x.userName;
//email
document.getElementById("user").innerHTML= x.email;
*/
