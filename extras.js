window.onscroll = function() {scrollFunction()};

function scrollFunction() { 
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementById("header").style.fontSize = "40px";
    } else{
        document.getElementById("header").style.fontSize = "110px";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
} 

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }
    for (i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}

