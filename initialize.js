// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript

var hometl = gsap.timeline({paused: true, repeat: -1});
var resumetl = gsap.timeline({paused: true, repeat: -1});
var portfoliotl = gsap.timeline({paused: true, repeat: -1});
var linkstl = gsap.timeline({paused: true, repeat: -1});
var tl = gsap.timeline();


document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("load", function(e) {
        document.body.style.display = "block";
        homePageAnimation();
        descriptionTypeWriter();
        createHomeAnimation();
        createResumeAnimation();
        createPortfolioAnimation();
        createLinksAnimation();
    }, false);
});
