// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


document.addEventListener("DOMContentLoaded", function(event) {
    window.addEventListener("load", function(e) {
        document.body.style.display = "block";
        window.tl = gsap.timeline();
        homePageAnimation();
        descriptionTypeWriter();
        window.hometl = gsap.timeline({paused: true, repeat: -1});
        window.resumetl = gsap.timeline({paused: true, repeat: -1});
        window.portfoliotl = gsap.timeline({paused: true, repeat: -1});
        window.linkstl = gsap.timeline({paused: true, repeat: -1});
        createHomeAnimation();
        createResumeAnimation();
        createPortfolioAnimation();
        createLinksAnimation();
    }, false);
});
