// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


// Create Base Timeline for all Page Animations

var tl = gsap.timeline();


// Create Sub-Timelines for Nav Hover Animations

var hometl = gsap.timeline({paused: true, repeat: -1});
var resumetl = gsap.timeline({paused: true, repeat: -1});
var portfoliotl = gsap.timeline({paused: true, repeat: -1});
var linkstl = gsap.timeline({paused: true, repeat: -1});


// Prevent Flickering on Load with Pre-Loading Before Start of Timeline

document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("load", function(e) {
        document.body.style.display = "block";

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            homePageAnimation();
            descriptionTypeWriter();
            document.getElementsByClassName(".nav-code-window1").src="assets/images/mobileimages/home1.svg";
            document.getElementsByClassName(".nav-code-window2").src="assets/images/mobileimages/resume1.svg";
            document.getElementsByClassName(".nav-code-window3").src="assets/images/mobileimages/portfolio1.svg";
            document.getElementsByClassName(".nav-code-window4").src="assets/images/mobileimages/links1.svg";
        }
        else {
            homePageAnimation();
            descriptionTypeWriter();
            createHomeAnimation();
            createResumeAnimation();
            createPortfolioAnimation();
            createLinksAnimation();
        }
    }, false);
});
