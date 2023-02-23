class ColorsCard {
    id;
    color;
    addToList;
    htmlElement;
    circle;
    text;

    constructor(newId, newColor, addToList) {
        // Setting properties
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;  

        // Create a li element
        this.htmlElement = document.createElement("li");
        // Give it a class named "colors__color"
        this.htmlElement.classList = "colors__color";

        // Create a figure and add a class named "colors__circle"
        this.circle = document.createElement("figure");
        this.circle.classList = "colors__circle";
        this.circle.style.background = this.color;

        // Create a p element with the class named "colors__text"
        this.text = document.createElement("p");
        this.text.innerText = "Copied";
        this.text.classList = "colors__text";

        // When you click on the htmlelement, the function start
        this.htmlElement.onclick = this.onHTMLElementClicked;

        // finally render
        this.render();
    }

    onHTMLElementClicked = () => {
        // Add a class to the circle
        this.circle.classList.add("colors__circle--selected");
        // We change the title of the document to the color
        document.title = this.color;
        // We copied the color
        window.navigator.clipboard.writeText(this.color);
    }

    render() {
        // added ul, circle (figure) and text (p) to the li element
        this.htmlElement.appendChild(this.circle);
        this.htmlElement.appendChild(this.text);
        this.addToList.appendChild(this.htmlElement);
    }
}

class ColorList {
    id;
    htmlElement;

    constructor(newId) {
        this.id = newId;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");
        this.render();
    }

    render() {
        // Add ul into the body
        document.querySelector("body").appendChild(this.htmlElement);
    }
}

const colorList = new ColorList("js--colors");


class HSLGenerator {
    rendomHue;
    rendomSaturation;
    randomLightness;

    constructor() {
        this.generateHSL();
    }
    
    generateHue = function () {
        
        this.randomHue = Math.floor(Math.random() * (360 - 1) + 1);
    }

    generateSaturation = function () {
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%";

    }

    generateLightness = function () {
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%";

    }

    generateHSL = function () {
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        this.hsl = `hsl(${this.randomHue}, ${this.randomSaturation}, ${this.randomLightness})`;
    }
}

class App { 
    id;
    colorList;
    hslGenerator;

    constructor(newId) {
        this.id = newId;
        // Making new object with the given App id
        this.colorList = new ColorList(this.id);
        this.hslGenerator = new HSLGenerator();
        this.generateColorCards();
    }

    generateColorCards = function () {
        // Starts at 1 and ends at 100
        for (let i = 1; i <= 100; i++) {
            this.hslGenerator.generateHSL();
            // Making new object
            new ColorsCard(i, this.hslGenerator.hsl, document.getElementById(this.colorList.id));
        }
    }
}


const app = new App("js--app");

