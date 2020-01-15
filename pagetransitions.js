// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


function playAnimation(pageName) {
    tl.clear();
    window.scrollTo(0, 0);
    if (pageName == 'homepage') {
        homePageAnimation();
    }
    if (pageName == 'resumepage') {
        resumePageAnimation();
    }
    if (pageName == 'portfoliopage') {
        portfolioPageAnimation();
    }
    if (pageName == 'linkspage') {
        linksPageAnimation();
    }
}


function homePageAnimation() {
    tl.fromTo(".name-text", {opacity: 0, x: -120}, {opacity: 1, x: 0, ease: "circ.out", duration: 1});
    tl.fromTo(".typewrite-text", {opacity: 0, x: -120}, {opacity: 1, x: 0, ease: "circ.out", duration: 1}, "-=.75");
    tl.fromTo(".sub-text", {opacity: 0, y: -60}, {opacity: 1, y: 0, ease: "bounce.out", duration: 1.25}, "-=.75");
    playFooterAnimation();
}


function resumePageAnimation() {
    resumeTypeForward();
    tl.fromTo(".my-resume", {opacity:0, y: -120}, {opacity: 1, y: 0, ease: "circ.out", duration: 1.25});
    playFooterAnimation("-=.35");
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


function playFooterAnimation(timeStart) {
    tl.fromTo(".nav-code-window1", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, timeStart)
      .fromTo(".nav-code-window2", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75")
      .fromTo(".nav-code-window3", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75")
      .fromTo(".nav-code-window4", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75");
}
