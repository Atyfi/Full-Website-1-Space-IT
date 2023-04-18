let theme = document.querySelector(".theme")
let darkMode = document.querySelector(".darkMode")

// Theme
function compressDark(){
    theme.src = 'images/Light-mode(white).png';
    document.body.classList.add("darkMode");
}
function compressLight(){
    theme.src = 'images/Dark-mode(white).png';
    document.body.classList.remove("darkMode");
}

theme.addEventListener("click",e=>{

    setTheme = localStorage.getItem('savedTheme');
    

    if(theme.getAttribute('src') == 'images/Dark-mode(white).png'){
        compressDark()
        theme.style.animation = 'themeAnime1 3s '
        setTheme = localStorage.setItem('savedTheme', 'on')
    }
    else{
        compressLight()
        theme.style.animation = 'themeAnime2 3s'
        setTheme = localStorage.setItem('savedTheme', null)
    }

    
})
setTheme = localStorage.getItem('savedTheme')
if(setTheme === 'on'){
    compressDark()
}
else{
    compressLight()   
}

// nums
let nums = document.querySelectorAll(".num")
let interval = 4000;

nums.forEach( (num) => {
    let startValue = 0;
    let endValue = parseInt(num.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1
        num.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter)
        }
    },duration)
});


// scroll

// Api's
let scroll_Api = document.querySelector("#Api");
let Api = document.querySelector(".Api");
scroll_Api.addEventListener("click",e=>{
    Api.scrollIntoView({top:0,behavior:'smooth'})
})

// learn
let scroll_Learn = document.querySelector("#Learn");
let learn = document.querySelector(".learn");
scroll_Learn.addEventListener("click",e=>{
    learn.scrollIntoView({top:0,behavior:'smooth'})
})

// testimonials
let scroll_Testimonial = document.querySelector("#Testimonial")
let testimonials = document.querySelector(".testimonials");
scroll_Testimonial.addEventListener("click",e=>{
    testimonials.scrollIntoView({top:0,behavior:'smooth'})
})

// menu
let menu = document.querySelector(".menu");
let menu2Nav = document.querySelector(".menu2Nav")
let menuImg = document.querySelector(".menuImg");

menu.addEventListener("click",e=>{
    if(menu.firstChild.getAttribute("src") == 'images/hamburgerMenu.png'){
        menu.firstChild.src = 'images/close.png';
        menu2Nav.style.display = "flex";
    }
    else{
        menu.firstChild.src = 'images/hamburgerMenu.png';
        menu2Nav.style.display = "none" 
    }
})


// Menu li

// Login
let user = localStorage.getItem("user");
const userInfo = JSON.parse(user)
console.log(userInfo)

// Theme
let theme2 = document.querySelector(".theme2");

theme2.addEventListener("click",e=>{

    setTheme = localStorage.getItem('savedTheme');
    

    if(theme2.textContent == "Dark Mode"){
        theme2.textContent = "Light Mode"
        document.body.classList.add("darkMode");
        setTheme = localStorage.setItem('savedTheme', 'on')
    }
    else{
        theme2.textContent = "Dark Mode"
        document.body.classList.remove("darkMode");
        setTheme = localStorage.setItem('savedTheme', null)
    }

    
})
setTheme = localStorage.getItem('savedTheme')
if(setTheme === 'on'){
    theme2.textContent == "Light Mode"
    document.body.classList.add("darkMode");
}
else{
    theme2.textContent == "Dark Mode"
    document.body.classList.remove("darkMode");
}

// scrolls
// Api's
let scroll_Api2 = document.querySelector("#Api2");
scroll_Api2.addEventListener("click",e=>{
    Api.scrollIntoView({top:0,behavior:'smooth'})
})

// learn
let scroll_Learn2 = document.querySelector("#Learn2")
scroll_Learn2.addEventListener("click",e=>{
    learn.scrollIntoView({top:0,behavior:'smooth'})
})

// testimonials
let scroll_Testimonial2 = document.querySelector("#Testimonial2")
scroll_Testimonial2.addEventListener("click",e=>{
    testimonials.scrollIntoView({top:0,behavior:'smooth'})
})

// Document click
document.addEventListener("click",e=>{
    if(
        e.target.classList[0] != "menuImg" &&
        e.target.classList[0] != "menu2Nav"
    ){
        menu2Nav.style.display = "none";
        menuImg.src = 'images/hamburgerMenu.png';
    }
})