
class GetDataFromApi{
    url = "";
    data = null;

    constructor(newURL) {
        this.url = newURL;
    }

    // async betekent dat het in de achtergrond gebeurt
    async getData() {
        {
            await fetch(this.url)
            .then(function (response) {
                return response.json();
            }).then( (data) => {
                this.data = data;
            });
        }
        return this.data
    }
}

const api = new GetDataFromApi("./data/transactions.json");
api.getData().then(function(data){console.log(data)});

class Header{
    headerElement;
    figureElement;
    logoIElement;
    logoHeadingElement;
    avatarWrapperElement;
    avatarBodyElement;
    avatarHeadElement;
    avatarElement;
    placeToRenderHeader;

    constructor(placeToRenderHeader){
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.headerElement = document.createElement("header");
        this.headerElement.classList = "header";

        this.figureElement = document.createElement("figure");
        this.figureElement.classList = "header__logo";

        this.logoIElement = document.createElement("i");
        this.logoIElement.classList = "fa-solid fa-money-bill-transfer";

        this.logoHeadingElement = document.createElement("h1");
        this.logoHeadingElement.classList = "header__banky";
        this.logoHeadingElement.innerText = "banky";

        this.avatarWrapperElement = document.createElement("div");
        this.avatarWrapperElement.classList ="avatarWrapper";

        this.avatarElement = document.createElement("figure");
        this.avatarElement.classList = "header__avatar";

        this.avatarHeadElement = document.createElement("div");
        this.avatarHeadElement.classList = "header__avatarHead";

        this.avatarBodyElement = document.createElement("div");
        this.avatarBodyElement.classList = "header__avatarBody";
    }

    render(){
        this.placeToRenderHeader.appendChild(this.headerElement);
        this.headerElement.appendChild(this.figureElement);
        this.figureElement.appendChild(this.logoIElement);
        this.figureElement.appendChild(this.logoHeadingElement);
        this.headerElement.appendChild(this.avatarWrapperElement);
        this.avatarWrapperElement.appendChild(this.avatarElement);
        this.avatarElement.appendChild(this.avatarHeadElement);
        this.avatarElement.appendChild(this.avatarBodyElement);
    
    }
}

const header = new Header("body");
header.render();

