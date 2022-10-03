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

/////////////////////////////////////////
/* left top chicked*/
let start = document.querySelector(".start");
let icon = document.querySelector(".space1");
let none = document.querySelector(".frist");
let icon2 = document.querySelector(".space2");
let yousef = document.querySelector(".name");
let mon = document.querySelector(".none");

icon2.style.display="none";
none.style.display="none";
yousef.style.display="none";
icon.onclick = function () {
    none.style.display="block";
    mon.style.animation = "mon 0.5s linear forwards";
    icon.style.display="none";
    icon2.style.display="block";
    yousef.style.display="block";
    start.style.animation = "head 0.5s linear forwards";
};
icon2.onclick = function () {
    icon.style.display="block";
    icon2.style.display="none";
    none.style.display="none";
    yousef.style.display="none";
    start.style.animation = "he 0.5s linear forwards";
};

////////////////////////////////////////////
/* scroll bottom */
let out = document.querySelector(".out");
out.onclick = function () {
    window.scrollTo({
        top:700 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
/* scroll bottom */
let gal = document.querySelector(".gal");
gal.onclick = function () {
    window.scrollTo({
        top:1400 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
/* scroll bottom */
let tom = document.querySelector(".tom");
tom.onclick = function () {
    window.scrollTo({
        top:2000 ,
        behavior:"smooth" ,
       });

};
////////////////////////////////////////////
  /*scroll easy  */
const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 2000,
    reset: true
});

sr.reveal(`.span1, .span2,
         .span3, .a, .lo, 
         .html1, css1, .java1,
         .python1, .bb,
         .dd`, {
    interval: 50
});
////////////////////////////////////////////


// ===================    Type Writing   ======================

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Front-End Developer", "Graphic Designer", "Vector Artist", "2D Animator"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});



/////////////////////////////////////
// waiting
/////////////////////////////////////
let bgLoading = document.getElementById("bgLoading")
let bgLoadingCont = document.querySelector("#bgLoading .loading-container")
window.onload = () => {
    setTimeout(function() {
        bgLoadingCont.style.opacity = "0";
        bgLoading.style.pointerEvents = "none";
        bgLoading.style.backdropFilter = "blur(0px)";
        setTimeout(function() {
            bgLoadingCont.style.display = "none";
            bgLoading.style.display = "none";
        }, 1000)
    }, 1000)
};


//////////////////////////////////////
//scrolling
/////////////////////////////////////////

let activeimgpop = document.querySelector(".active-img-pop");
let imgcontntjs = document.querySelectorAll(".row .box");
let divimg = document.querySelector(".div-img");



imgcontntjs.forEach((element) => {
    element.addEventListener("click", function(eo) {
        showactiveimg();
        let getsrc = element.getElementsByTagName("img")[0].src;
        let srcimg = divimg.getElementsByTagName("img")[0];
        srcimg.src = getsrc;
        console.log(element)
    });
});

activeimgpop.addEventListener("click", function() {
    removeshowactiveimg();
});

function removeshowactiveimg() {
    activeimgpop.classList.remove("active");
}

function showactiveimg() {
    activeimgpop.classList.add("active");
};