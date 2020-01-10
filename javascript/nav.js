// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


function page_switcher(name_of_page) {

    var page_to_show = document.getElementById(name_of_page);

    if (!page_to_show) {
        alert("That page doesn't exist!");
        return;
    }

    var pages = document.getElementsByClassName('page');

    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    page_to_show.style.display = 'block';
}
