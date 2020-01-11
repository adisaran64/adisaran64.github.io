// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


function showPage(pageName) {
    var pageToShow = document.getElementById(pageName);
    if (!pageToShow) {
        alert("That page doesn't exist!");
        return;
    }

    var allPages = document.getElementsByClassName('page');
    for(var i = 0; i < allPages.length; i++) {
        allPages[i].style.display = 'none';
    }

    pageToShow.style.display = 'block';
}
