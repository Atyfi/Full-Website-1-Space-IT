// Username
let username = document.querySelector("#username");
const NamePattern = /^[\w._ ]{5,25}$/;
let container1 = document.querySelector("#container1");
let image1 = document.createElement('img'); 
let key1 = false;

username.addEventListener("keyup",e=>{ 

    if(username.value.length >= 1){
        container1.appendChild(image1);
    }

    if(username.value.trim().match(NamePattern)){
        image1.style.display = "block";
        image1.src = "images/valid.png";
        key1 = true;
    }
    
    else if(username.value.trim() == ""){
        image1.style.display = "none";
    }
    
    else{
        image1.style.display = "block";
        image1.src = "images/invalid.png";
        key1 = false;
    }
})

// Email
let email = document.querySelector("#email");
const EmailPattern = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
let container2 = document.querySelector("#container2");
let image2 = document.createElement('img')
let key2 = false;

email.addEventListener("keyup",e=>{ 

    if(email.value.length == 1){
        container2.appendChild(image2);
    }

    if(email.value.trim().match(EmailPattern)){
        image2.style.display = "block";
        image2.src = "images/valid.png";
        key2 = true;
    }
    
    else if(email.value.trim() == ""){
        image2.style.display = "none"
    }
    
    else{
        image2.style.display = "block";
        image2.src = "images/invalid.png";
        key2 = false;
    }
})

// Password
let password = document.querySelector("#password");
const PasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let container3 = document.querySelector("#container3");
let image3 = document.createElement('img')
let key3 = false;

password.addEventListener("keyup",e=>{ 

    if(password.value.length == 1){
        container3.appendChild(image3);
    }

    if(password.value.trim().match(PasswordPattern)){
        image3.style.display = "block";
        image3.src = "images/valid.png";
        key3 = true;
    }
    
    else if(password.value.trim() == ""){
        image3.style.display = "none"
    }
    
    else{
        image3.style.display = "block";
        image3.src = "images/invalid.png";
        key3 = false;
    }
})

// Confirm Password
let confirmPassword = document.querySelector("#confirmPassword");
let container4 = document.querySelector("#container4");
let image4 = document.createElement('img')
let key4 = false;

confirmPassword.addEventListener("keyup",e=>{ 

    if(confirmPassword.value.length == 1){
        container4.appendChild(image4);
    }

    if(confirmPassword.value.trim() == password.value){
        image4.style.display = "block";
        image4.src = "images/valid.png";
        key4 = true;
    }
    
    else if(password.value.trim() == ""){
        image4.style.display = "none"
    }
    
    else{
        image4.style.display = "block";
        image4.src = "images/invalid.png";
        key4 = false;
    }
})


let submit = document.querySelector(".submit");

submit.addEventListener("click",e=>{
    if(!(key1 && key2 && key3 && key4 == true)){
        e.preventDefault()

        if(!key1){
            container1.appendChild(image1);
            image1.src = "images/invalid.png";
        }
        if(!key2){
            container2.appendChild(image2);
            image2.src = "images/invalid.png";
        }
        if(!key3){
            container3.appendChild(image3);
            image3.src = "images/invalid.png";
        }
        if(!key4){
            container4.appendChild(image4);
            image4.src = "images/invalid.png";
        }

    }

    else{
        let i = 0
        users = [];
        let uniqueName = `user ${i++}`
        uniqueName = {
            Username : username.value,
            Emails : email.value,
            Password : password.value,
        }
        users.push(uniqueName);
        window.history.back()
        localStorage.setItem("user", JSON.stringify(uniqueName))

    }
    
})