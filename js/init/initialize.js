// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


// Create Base Timeline for all Page Animations

var tl = gsap.timeline();


// Prevent Flickering on Load with Pre-Loading Before Start of Timeline

document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("load", function(e) {
        document.body.style.display = "block";
        homePageAnimation();
        descriptionTypeWriter();
    }, false);
});
