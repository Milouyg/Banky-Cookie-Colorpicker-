class Cookie{
        name = "";
        htmlElement = undefined;
        score = undefined;
        factor = 1;
        // Dit wordt 1x uitgevoerd wanneer "new" wordt gebruikt
        constructor(newName, newHTMLElement, newScore){
                this.name = newName;
                this.htmlElement = newHTMLElement;
                this.htmlElement.onclick = this.onCookieClicked;
                this.score = newScore;
        }

        onCookieClicked = () =>{
                this.score.onCookieClicked(this.factor);
        }

        onStyleChangeChocolate(){
                this.htmlElement.classList.add("cookie--chocolate");
        }

        onStyleChangeRedvelvet(){
                this.htmlElement.classList.add("cookie--redvelvet");
        }

        returnOldStyle(){
                this.htmlElement.classList.remove("cookie--redvelvet");
        }
}

class Score{
        score;
        name = "";
        htmlElement = undefined;

        constructor(newScore, newName, newHTMLElement){
                this.score = newScore;
                this.name = newName;
                this.htmlElement = newHTMLElement;
                this.htmlElement.innerText= newScore;
        }

        onCookieClicked(factorFromCookie){
                this.htmlElement.innerText = this.score += factorFromCookie;
        }

        subtractScore(){
                this.score = this.score - 100;
                this.htmlElement.innerText = this.score;
        }

        onAutoScoreClicked(){
                setInterval( () => {
                this.score = this.score + 500;
                this.htmlElement.innerText = this.score;
                }, 10000)
                
        }

        addPoints(){
                this.score = this.score + 10000;
                this.htmlElement.innerText = this.score;
        }

        scoreLoaded(newScore) {
                this.score = newScore;
                this.htmlElement.innerText = this.score;
        }
}

class Multiplier{
        factor= 100;
        htmlElement = undefined;
        cookie = undefined;
        bought = false;

        constructor(htmlElement, cookie){
                this.htmlElement = htmlElement
                this.cookie = cookie;
                this.htmlElement.onclick = this.onMultiplierClicked;
        }

        onMultiplierClicked = () =>{
                if(this.bought === false){
                        this.bought = true;
                        this.cookie.score.subtractScore();
                        this.cookie.factor = this.factor;
                }
        }
}

class AutosScore{
        htmlElement = undefined;
        score = undefined;
        bought = false;

        constructor(htmlElement, score){
                this.htmlElement = htmlElement;
                this.score = score;
                this.htmlElement.onclick = this.onAutoScoreClicked;
        }

        onAutoScoreClicked = () => {
                if(this.bought === false){
                        this.bought = true;
                        this.score.subtractScore();
                        this.score.onAutoScoreClicked();
                }
        }
}

class ChocolateCookie{
        htmlElement = undefined;
        bought = false;
        cookie = undefined;

        constructor(htmlElement, cookie){
                this.htmlElement = htmlElement;
                this.cookie = cookie;
                this.htmlElement.onclick = this.onChocolateCookieClicked;
        }

        onChocolateCookieClicked = () => {
                if(this.bought === false && window.localStorage.getItem("chocolateCookie") !== "true"){
                        this.bought = true;
                        window.localStorage.setItem("chocolateCookie", this.bought);
                        this.cookie.score.addPoints();
                }
                this.cookie.onStyleChangeChocolate();
        }
}

class Save{
        htmlElement;

        constructor(newHTMLElement){
                this.htmlElement = newHTMLElement;
                this.htmlElement.onclick = this.onSaveButtonClicked;

        }

        onSaveButtonClicked = () => {
                window.localStorage.setItem("score", score.score);
        }
}

class RedvelvetCookie{
        htmlElement = undefined;
        bought = false;
        cookie = undefined;

        constructor(htmlElement, cookie){
                this.htmlElement = htmlElement;
                this.cookie = cookie;
                this.htmlElement.onclick = this.onRedvelvetCookieClicked;
                }

        onRedvelvetCookieClicked = () => {
                // Opdracht 
                if (this.bought === false) {
                        this.bought = true;
                        this.cookie.onStyleChangeRedvelvet();
                }

                // extra
                // if(this.cookie.htmlElement.classList.contains("cookie--redvelvet") === true){
                //         this.cookie.returnOldStyle();
                // }
                // else{
                //         this.cookie.onStyleChangeRedvelvet();
                // }
        }
}

class Load{
        score;

        constructor(score) {
                this.score = score;
                this.onLoad();
        }

        onLoad = function () {
                // Save the score in the localStorage
                const scoreFromLocalStorage = window.localStorage.getItem("score");
                if(scoreFromLocalStorage !== null){
                this.score.scoreLoaded(parseInt(scoreFromLocalStorage));
                }
        }
}

// Setup for score and cookie
const score = new Score(555, "Default score", document.getElementById("js--score"));
const cookie = new Cookie("Default cookie", document.getElementById("js--cookie"), score);

// Setup desktop upgrades
const multiplier = new Multiplier(document.getElementById("js--multiplier"), cookie);
const auto = new AutosScore(document.getElementById("js--autoScore"), score);
const chocolate = new ChocolateCookie(document.getElementById("js--chocolate"), cookie);
const redVelvet = new RedvelvetCookie(document.getElementById("js--redVelvet"), cookie);
const save = new Save(document.getElementById("js--save"));
const load = new Load(score);


// Setup mobile upgrades
const multiplierMobile = new Multiplier(document.getElementById("js--multiplier--mobile"), cookie);
const autoMobile = new AutosScore(document.getElementById("js--autoScore--mobile"), score);
const chocolateMobile = new ChocolateCookie(document.getElementById("js--chocolate--mobile"), cookie);
const redVelvetMobile = new RedvelvetCookie(document.getElementById("js--redVelvet--mobile"), cookie);







