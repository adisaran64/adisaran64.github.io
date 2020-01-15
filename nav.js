// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


// Handle Panel Switching

function showPage(pageName) {
    var pageToShow = document.getElementById(pageName);
    if (!pageToShow) {
        alert("You've selected a page that doesn't exist.");
        return;
    }
    var allPages = document.getElementsByClassName('page');
    for(var i = 0; i < allPages.length; i++) {
        allPages[i].style.display = 'none';
    }
    playAnimation(pageName);
    pageToShow.style.display = "block";
}
