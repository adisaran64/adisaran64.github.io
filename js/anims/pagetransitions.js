// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


// Handle Panel Animations

function playAnimation(pageName) {
    tl.progress(0).clear();
    window.scrollTo(0, 0);
    if (pageName == "homepage") {
        homePageAnimation();
    }
    if (pageName == "resumepage") {
        resumePageAnimation();
    }
    if (pageName == "portfoliopage") {
        portfolioPageAnimation();
    }
    if (pageName == "linkspage") {
        linksPageAnimation();
    }
}


// Create Specific Panel Animations

function homePageAnimation() {
    tl.fromTo(".name-text", {opacity: 0, x: -120}, {opacity: 1, x: 0, ease: "circ.out", duration: 1})
      .fromTo(".typewrite-text", {opacity: 0}, {opacity: 1, ease: "power4.out", duration: 1}, "-=.75")
      .fromTo(".sub-text", {opacity: 0, y: -60}, {opacity: 1, y: 0, ease: "bounce.out", duration: 1.25}, "-=.75");
    playFooterAnimation();
}

function resumePageAnimation() {
    resumeTypeForward();
    tl.fromTo(".my-resume", {opacity:0, y: -120}, {opacity: 1, y: 0, ease: "circ.out", duration: 1.25});
    playFooterAnimation("-=.4");
}

function portfolioPageAnimation() {
    portfolioTypeForward();
    tl.fromTo(".pathfinderfolder", {opacity:0, x: 60, y: -60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25})
      .fromTo(".secondfolder", {opacity:0, y: -60}, {opacity: 1, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
      .fromTo(".thirdfolder", {opacity:0, x: -60, y: -60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
      .fromTo(".fourthfolder", {opacity:0, x: 60, y: 60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
      .fromTo(".fifthfolder", {opacity:0, y: 60}, {opacity: 1, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
      .fromTo(".sixthfolder", {opacity:0, x: -60, y: 60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1");
    playFooterAnimation("-=1");
}

function linksPageAnimation() {
    linksTypeForward();
    tl.fromTo(".sub-text2", {opacity:0, y: -60}, {opacity: 1, y: 0, ease: "bounce.out", duration: 1.25});
    playFooterAnimation("-=.4");
}


// Create Footer Transition Animation

function playFooterAnimation(timeStart) {
    tl.fromTo(".nav1", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, timeStart)
      .fromTo(".nav2", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75")
      .fromTo(".nav3", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75")
      .fromTo(".nav4", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75");
}
