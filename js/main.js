let up = document.querySelector(".up");
up.classList.remove("show");
window.onscroll =  function (){
    // console.log(this.scrollY);
    if(this.scrollY >= 700){
        up.classList.add("show");
    } else {
        up.classList.remove("show");
        }

        // this.screenY >= 10000 ? up.classList.add("show") : up.classList.remove("show") ;
};
up.onclick = function () {
   window.scrollTo({
    top:0 ,
    behavior:"smooth" ,
   });
};

//////////////////////////////////////

let home = document.querySelector(".home9");
home.onclick = function () {
    window.scrollTo({
        top:10 ,
        behavior:"smooth" ,
       });

};
///////////////////////////////////////////
/* scroll bottom */
let menu = document.querySelector(".menu9");
menu.onclick = function () {
    window.scrollTo({
        top:1500 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
/* scroll bottom */
let ser = document.querySelector(".service9");
ser.onclick = function () {
    window.scrollTo({
        top:900 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
/* scroll bottom */
let blog = document.querySelector(".blog9");
blog.onclick = function () {
    window.scrollTo({
        top:4900 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
/* scroll bottom */
let about = document.querySelector(".about9");
about.onclick = function () {
    window.scrollTo({
        top:2000 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
/* scroll bottom */
let shop = document.querySelector(".shop9");
shop.onclick = function () {
    window.scrollTo({
        top:2500 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
/* scroll bottom */
let con = document.querySelector(".contact9");
con.onclick = function () {
    window.scrollTo({
        top:3000 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////

let link1 = document.querySelector("#link1");
let link2 = document.querySelector("#link2");
let link3 = document.querySelector("#link3");
let img1 = document.querySelector(".cont_one");
let img2 = document.querySelector(".cont_two");
let img3 = document.querySelector(".cont_three");

img1.classList.add("z");
img1.classList.add("color");
img2.classList.remove("z");
img3.classList.remove("z");
link1.style.backgroundColor = "#b18c59";
link1.onclick = function () {
    img1.classList.add("z");
    img1.classList.add("color");
    link1.style.backgroundColor = "#b18c59";
    link2.style.backgroundColor = "";
    link3.style.backgroundColor = "";
    img2.classList.remove("z");
    img3.classList.remove("z");
};
link2.onclick = function () {
    img1.classList.remove("z");
    img2.classList.add("z");
    img2.classList.add("color");
    link2.style.backgroundColor = "#b18c59";
    link1.style.backgroundColor = "";
    link3.style.backgroundColor = "";
    img3.classList.remove("z");
};
link3.onclick = function () {
    img1.classList.remove("z");
    img2.classList.remove("z");
    img3.classList.add("z");
    img3.classList.add("color");
    link3.style.backgroundColor = "#b18c59";
    link2.style.backgroundColor = "";
    link1.style.backgroundColor = "";
};

////////////////////////////////////////////
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home_text, .top_text , .ops , .img2 ,.say_home ,.c3`, {
    interval: 50
});
///////////////////////////////////////////////
const bottom = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 2000,
    reset: true
});

bottom.reveal(`.top_pragraph , .even ,.shop_button , .cont_home  `, {
    interval: 50
});
// /////////////////////////////////////////////////
const left = ScrollReveal({
    origin: 'left',
    distance: '40px',
    duration: 2000,
    reset: true
});

left.reveal(`.blog_one ,.shop_coffee ,.c1`, {
    interval: 50
});
// //////////////////////////////////////////////////
const right = ScrollReveal({
    origin: 'right',
    distance: '40px',
    duration: 2000,
    reset: true
});

right.reveal(`.dis ,.story ,.text1 , .easy, .img_two , .shop_small , .shop_num ,.c2`, {
    interval: 50
});

