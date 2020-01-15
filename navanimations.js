// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


// Create Nav Hover Animations

function createHomeAnimation() {
    var homearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11];
    var homepy = document.getElementsByClassName("nav-code-window1");
    for (var i = homearray.length - 1; i >= 0; i--) {
      hometl.set(homepy, {attr:{src:'/assets/images/homeimages/home'+homearray[i]+'.svg'}}, i/5);
    }
    var container = document.querySelector(".homeimagecontainer");
    createAnimationTriggers(container, hometl);
}

function createResumeAnimation() {
    var resumearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16];
    var resumejava = document.getElementsByClassName("nav-code-window2");
    for (var i = resumearray.length - 1; i >= 0; i--) {
      resumetl.set(resumejava, {attr:{src:'/assets/images/resumeimages/resume'+resumearray[i]+'.svg'}}, i/5);
    }
    var container = document.querySelector(".resumeimagecontainer");
    createAnimationTriggers(container, resumetl);
}

function createPortfolioAnimation() {
    var portfolioarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21];
    var portfolioc = document.getElementsByClassName("nav-code-window3");
    for (var i = portfolioarray.length - 1; i >= 0; i--) {
      portfoliotl.set(portfolioc, {attr:{src:'/assets/images/portfolioimages/portfolio'+portfolioarray[i]+'.svg'}}, i/5);
    }
    var container = document.querySelector(".portfolioimagecontainer");
    createAnimationTriggers(container, portfoliotl);
}

function createLinksAnimation() {
    var linksarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18];
    var linkshtml = document.getElementsByClassName("nav-code-window4");
    for (var i = linksarray.length - 1; i >= 0; i--) {
      linkstl.set(linkshtml, {attr:{src:'/assets/images/linksimages/links'+linksarray[i]+'.svg'}}, i/5);
    }
    var container = document.querySelector(".linksimagecontainer");
    createAnimationTriggers(container, linkstl);
}


// Add Hover Triggers to Nav

function createAnimationTriggers(container, tl) {
    container.addEventListener("mouseenter", playAnimation);
    container.addEventListener("mouseleave", pauseAnimation);
    container.addEventListener("click", resetAnimation);
    function playAnimation() {
        tl.play();
    }
    function pauseAnimation() {
        tl.pause();
    }
    function resetAnimation() {
        hometl.progress(0).pause();
        resumetl.progress(0).pause();
        portfoliotl.progress(0).pause();
        linkstl.progress(0).pause();
    }
}
