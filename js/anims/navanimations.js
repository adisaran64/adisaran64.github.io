// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


// Create Specific Nav Button Animations and Triggers

function homeNavAnimation() {
    var homepage = document.querySelector(".nav1");
    homepage.addEventListener("mouseenter", animateHome);

    function animateHome() {
        homepage.classList.add("animated", "rubberBand");

        function handleAnimationEnd() {
            homepage.classList.remove("animated", "rubberBand");
            homepage.removeEventListener("animationend", handleAnimationEnd);
            if (typeof callback === "function") {
                callback()
            }
        }
        homepage.addEventListener("animationend", handleAnimationEnd);
    }
}

function resumeNavAnimation() {
    var resumepage = document.querySelector(".nav2");
    resumepage.addEventListener("mouseenter", animateResume);

    function animateResume() {
        resumepage.classList.add("animated", "shake");

        function handleAnimationEnd() {
            resumepage.classList.remove("animated", "shake");
            resumepage.removeEventListener("animationend", handleAnimationEnd);
            if (typeof callback === "function") {
                callback()
            }
        }
        resumepage.addEventListener("animationend", handleAnimationEnd);
    }
}

function portfolioNavAnimation() {
    var portfoliopage = document.querySelector(".nav3");
    portfoliopage.addEventListener("mouseenter", animatePortfolio);

    function animatePortfolio() {
        portfoliopage.classList.add("animated", "heartBeat");

        function handleAnimationEnd() {
            portfoliopage.classList.remove("animated", "heartBeat");
            portfoliopage.removeEventListener("animationend", handleAnimationEnd);
            if (typeof callback === "function") {
                callback()
            }
        }
        portfoliopage.addEventListener("animationend", handleAnimationEnd);
    }
}

function linksNavAnimation() {
    var linkspage = document.querySelector(".nav4");
    linkspage.addEventListener("mouseenter", animateLinks);

    function animateLinks() {
        linkspage.classList.add("animated", "swing");

        function handleAnimationEnd() {
            linkspage.classList.remove("animated", "swing");
            linkspage.removeEventListener("animationend", handleAnimationEnd);
            if (typeof callback === "function") {
                callback()
            }
        }
        linkspage.addEventListener("animationend", handleAnimationEnd);
    }
}
