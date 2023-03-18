
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
        this.avatarElement.classList = "avatar";

        this.avatarHeadElement = document.createElement("div");
        this.avatarHeadElement.classList = "avatar__head";

        this.avatarBodyElement = document.createElement("div");
        this.avatarBodyElement.classList = "avatar__body";
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

class BankyMain{
    placeToRenderMain;
    leftSection;
    rightSection;

    constructor(placeToRenderMain){
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = "banky";

        this.leftSection = new BankyLeftSection(this.mainElement);
        this.rightSection = new BankyRightSection(this.mainElement);
    }

    render(){
        // main
        this.placeToRenderMain.appendChild(this.mainElement);

        this.leftSection.render();
        this.rightSection.render();

    };
}


class BankyLeftSection{

    mainElement;
    constructor(mainElement){
        this.mainElement = mainElement;

     // Left column

    this.leftSectionElement = document.createElement("section");
    this.leftSectionElement.classList = "banky__section banky__section--left";

    this.bankyHeaderElement = document.createElement("header");
    this.bankyHeaderElement.classList = "banky__header";

    this.bankyHeaderWrapElement = document.createElement("div");
    this.bankyLogoElement = document.createElement("figure");
    this.bankyLogoElement.classList = "banky__logo";

    this.bankyLogoIElement = document.createElement("i");
    this.bankyLogoIElement.classList = "fa-solid fa-house";

    this.bankyLogoText = document.createElement("h1");
    this.bankyLogoText.classList = "banky__money";
    this.bankyLogoText.innerText = "Saldo 10$";

    this.eyeButton = document.createElement("button");
    this.eyeButton.classList = "banky__eyeButton";

    this.eyeFigure = document.createElement("figure");
    this.eyeFigure.classList = "banky__eye";

    this.eyeI = document.createElement("i");
    this.eyeI.classList = "fa-solid fa-eye";

    this.transactionsElement = document.createElement("ul");
    this.transactionsElement.classList = "banky__transactions";

    this.transactionElement = document.createElement("li");
    this.transactionElement.classList = "banky__transaction"; 

    this.transactionFrom = document.createElement("h3");
    this.transactionFrom.classList = "banky__name";
    this.transactionFrom.innerText = "Jeroen";

    this.transactionAmount = document.createElement("h3");
    this.transactionAmount.classList = "banky__amount";
    this.transactionAmount.innerText = "+10";

    this.transferButton = document.createElement("button");
    this.transferButton.classList = "banky__transferButton";
    this.transferButton.innerText = "Overboeken";
    }

    render(){
        this.mainElement.appendChild(this.leftSectionElement);

        this.mainElement.appendChild(this.leftSectionElement);
        this.leftSectionElement.appendChild(this.bankyHeaderElement);
        this.bankyHeaderElement.appendChild(this.bankyHeaderWrapElement);
        this.bankyHeaderWrapElement.appendChild(this.bankyLogoElement);
        this.bankyLogoElement.appendChild(this.bankyLogoIElement);
        this.bankyHeaderWrapElement.appendChild(this.bankyLogoText);
        this.bankyHeaderWrapElement.appendChild(this.eyeButton);
        this.eyeButton.appendChild(this.eyeFigure);
        this.eyeFigure.appendChild(this.eyeI);
        this.leftSectionElement.appendChild(this.transactionsElement);
        this.transactionsElement.appendChild(this.transactionElement)
        this.transactionElement.appendChild(this.transactionFrom);
        this.transactionElement.appendChild(this.transactionAmount);
        this.leftSectionElement.appendChild(this.transferButton);
    }

}

class BankyRightSection{
    mainElement;

    constructor(mainElement){
        this.mainElement =  mainElement;

        this.rightSectionElement = document.createElement("section");
        this.rightSectionElement.classList = "banky__section banky__section--right";

        this.accountsElement = document.createElement("ul");
        this.accountsElement.classList = "banky__account";

        this.accountElement = document.createElement("li");
        this.accountElement.classList = "banky__account";

        this.bankySwitchButton = document.createElement("button");
        this.bankySwitchButton.classList = "banky__switchAccount";

        this.bankySwitchAccountFigure = document.createElement("figure");
        this.bankySwitchAccountFigure.classList = "banky__logo";

        this.bankySwitchI = document.createElement("i");
        this.bankySwitchI.classList = "fa-solid fa-house";

        this.bankyNameOfAccount = document.createElement("h4");
        this.bankyNameOfAccount.classList = "banky__nameOfAccount";
        this.bankyNameOfAccount.innerText = "betaalrekening"
    }

    render(){
        this.mainElement.appendChild(this.rightSectionElement);
        this.rightSectionElement.appendChild(this.accountsElement);
        this.accountsElement.appendChild(this.accountElement);
        this.accountElement.appendChild(this.bankySwitchButton);
        this.bankySwitchButton.appendChild(this.bankySwitchAccountFigure);
        this.bankySwitchAccountFigure.appendChild(this.bankySwitchI);
        this.accountElement.appendChild(this.bankyNameOfAccount);
    }
}


const header = new Header("body");
header.render();

const banky = new BankyMain("body");
banky.render();

