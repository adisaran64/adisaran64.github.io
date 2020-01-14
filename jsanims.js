// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


const TypeForward = function(element, word, typeSpeed) {
    this.element = element;
    this.word = word;
    this.typeSpeed = typeSpeed;
    this.currentTxt = '';
    this.type();
}


TypeForward.prototype.type = function() {
    this.currentTxt = word.substring(0, this.currentTxt.length + 1);
    this.element.innerHTML = `<span class="typetxt">${this.currentTxt}</span>`;
    if (this.currentTxt == word) {
        return;
    }
    setTimeout(() => this.type(), this.typeSpeed);
}




function resumeTypeForward() {
    var element = document.querySelector(".resumetype");
    word = "Résumé"
    typeSpeed = 200;
    new TypeForward(element, word, typeSpeed);
}

function portfolioTypeForward() {
    var element = document.querySelector(".portfoliotype");
    word = "Portfolio"
    typeSpeed = 200;
    new TypeForward(element, word, typeSpeed);
}

function linksTypeForward() {
    var element = document.querySelector(".linkstype");
    word = "Links"
    typeSpeed = 200;
    new TypeForward(element, word, typeSpeed);
}


const TypeWriter = function(element, words) {
    this.element = element;
    this.words = words;
    this.currentTxt = '';
    this.wordIndex = 0;
    this.wait = 1250;
    this.typeSpeed = 100;
    this.type();
    this.isDeleting = false;
}


TypeWriter.prototype.type = function() {


    const currentWord = this.wordIndex % this.words.length;
    const fullTxt = this.words[currentWord];


    if (this.isDeleting) {
        this.currentTxt = fullTxt.substring(0, this.currentTxt.length-1);
    }
    else {
        this.currentTxt = fullTxt.substring(0, this.currentTxt.length+1);
    }

    this.element.innerHTML = `<span class="typetxt">${this.currentTxt}</span>`;

    var typeSpeed = this.typeSpeed;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    if (!this.isDeleting && this.currentTxt == fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
    }

    else if (this.isDeleting && this.currentTxt == '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed)

    }


function descriptionTypeWriter() {
    var element = document.querySelector(".descriptiontype");
    words = ["Undergraduate at UC Berkeley", "Studying Mathematics and Computer Science", "Seeking internship opportunities", "Analytical. Driven. Innovative."];
    return new TypeWriter(element, words);
}
