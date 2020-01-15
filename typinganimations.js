// My Website - Aditya Saravanan
// My website, made using HTML, CSS, and JavaScript


// Typing Forward Animation

const TypeForward = function(element, word) {
    this.element = element;
    this.word = word;
    this.currentTxt = '';
    this.type();
}

TypeForward.prototype.type = function() {
    this.currentTxt = word.substring(0, this.currentTxt.length + 1);
    this.element.innerHTML = `<span class="typetxt">${this.currentTxt}</span>`;
    if (this.currentTxt == word) {
        return;
    }
    setTimeout(() => this.type(), 200);
}


// Specific Type Forward Animations

function resumeTypeForward() {
    var element = document.querySelector(".resumetype");
    word = "Résumé"
    new TypeForward(element, word);
}

function portfolioTypeForward() {
    var element = document.querySelector(".portfoliotype");
    word = "Portfolio"
    new TypeForward(element, word);
}

function linksTypeForward() {
    var element = document.querySelector(".linkstype");
    word = "Links"
    new TypeForward(element, word);
}


// TypeWriter Animation

const TypeWriter = function(element, words) {
    this.element = element;
    this.words = words;
    this.currentTxt = '';
    this.wordIndex = 0;
    this.typeSpeed = 100;
    this.wait = 1250;
    this.isDeleting = false;
    this.type();
}

TypeWriter.prototype.type = function() {
    const currentWord = this.wordIndex % this.words.length;
    const fullTxt = this.words[currentWord];
    if (this.isDeleting) {
        this.currentTxt = fullTxt.substring(0, this.currentTxt.length - 1);
    }
    else {
        this.currentTxt = fullTxt.substring(0, this.currentTxt.length + 1);
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


// Specific TypeWriter Animations

function descriptionTypeWriter() {
    var element = document.querySelector(".descriptiontype");
    words = ["Undergraduate at UC Berkeley", "Studying Mathematics and Computer Science", "Seeking internship opportunities", "Analytical. Driven. Innovative."];
    return new TypeWriter(element, words);
}
