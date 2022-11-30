'use strict';

import User from "./User.js";

newUser();
document.getElementById('submit-btn').addEventListener("click", newPost);


function newUser(){
    let actualUser = new User(1,"Roberto","RobertoUser","roberto@gm.com");
    let data = actualUser.getInfo();
}

function newPost(){
    let actualUser = new User(1,"Roberto","RobertoUser","roberto@gm.com");
    let data = actualUser.getInfo();
    // Insert my id and image in control
    let postText = document.getElementById('entrytext').value;
    let postImg = document.getElementById('imgpath').value;
    // clone this structure for the new post
    let postTemplate = document.getElementById("posttmpl");
    let clonedPost = postTemplate.cloneNode(true);
    clonedPost.removeAttribute("hidden");    
    document.getElementById("postZone").appendChild(clonedPost);
    document.getElementById("userposted").innerHTML= data[1];
    document.getElementById("post-text").innerHTML=   document.getElementById("entrytext").value;
}


