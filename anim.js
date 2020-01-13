// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript
var tl = gsap.timeline();
homePageAnimation(tl);

function playAnimation(pageName, tl) {

    if (pageName == 'homepage') {
        homePageAnimation(tl);
    }
    if (pageName == 'resumepage') {
        resumePageAnimation(tl);
    }
    if (pageName == 'portfoliopage') {
        portfolioPageAnimation(tl);
    }
    if (pageName == 'linkspage') {
        linksPageAnimation(tl);
    }
}


function homePageAnimation(tl) {
    tl.fromTo(".sub-text", {opacity:0, y: -60}, {opacity: 1, y: 0, ease: "bounce.out", duration: 1.25});
    playFooterAnimation(tl);
}


function resumePageAnimation(tl) {
    tl.fromTo(".my-resume", {opacity:0, y: -120}, {opacity: 1, y: 0, ease: "circ.out", duration: 1.25});
    playFooterAnimation(tl);
}


function portfolioPageAnimation(tl) {
    tl.fromTo(".pathfinderfolder", {opacity:0, x: 60, y: -60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25})
               .fromTo(".secondfolder", {opacity:0, y: -60}, {opacity: 1, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
               .fromTo(".thirdfolder", {opacity:0, x: -60, y: -60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
               .fromTo(".fourthfolder", {opacity:0, x: 60, y: 60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
               .fromTo(".fifthfolder", {opacity:0, y: 60}, {opacity: 1, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1")
               .fromTo(".sixthfolder", {opacity:0, x: -60, y: 60}, {opacity: 1, x: 0, y: 0, ease: "slow(0.7, 0.7, false)", duration: 1.25}, "-=1");
    playFooterAnimation(tl);
}


function linksPageAnimation(tl) {
    tl.fromTo(".sub-text2", {opacity:0, y: -60}, {opacity: 1, y: 0, ease: "bounce.out", duration: 1.25});
    playFooterAnimation(tl);
}


function playFooterAnimation(tl, timeStart) {
    tl.fromTo(".nav-code-window1", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1},)
      .fromTo(".nav-code-window2", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75")
      .fromTo(".nav-code-window3", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75")
      .fromTo(".nav-code-window4", {opacity: 0, scale: .5, y: 60}, {opacity: 1, scale: 1, y: 0, ease: "circ", overwrite:"all", duration: 1}, "-=.75");
}
