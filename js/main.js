var cardElement = document.querySelector('#cards');

var cards = JSON.parse(localStorage.getItem('list_Cards')) || [
    {
        title: 'Davi',
        text: 'Davi passou por maus tratos, ele é um cachorrinho docil, carinhoso e aprende comandos com facilidade',
        img: 'img/endearing.jpg',
        link: '#'
    },
    {
        title: 'Lexa',
        text: 'Lexa é uma chacorrinha muito inteligente. Otima companhia para pessoas que possuem crianças.',
        img: 'img/doginho.jpg',
        link: '#'
    },
    {
        title: 'Bartho',
        text: 'Carinhoso e manso, Bartho é perfeito para pessoas que querem um cachorro comportado.',
        img: 'img/manchado.jpg',
        link: '#'
    },
    {
        title: 'Julie',
        text: 'Uma das melhores companhias que já tivemos. Atenta e procura estar sempre proxima',
        img: 'img/pretinha.jpg',
        link: '#'
    },
    {
        title: 'Bethoven',
        text: 'É um filhote cheio de energia e super saudável, um amor de cachorro, perfeito para crianças.',
        img: 'img/pantera.jpg',
        link: '#'
    },
    {
        title: 'Yoshi',
        text: 'Super brincalhão e manso. um rottweiler perfeito para residencias com grandes espaços',
        img: 'img/charlie.jpg',
        link: '#'
    },
    {
        title: 'Drogo',
        text: 'Drogo é bem queito e carinhoso, Adora passear, é um cachorro muito obediente e higienico.',
        img: 'img/kayler.jpg',
        link: '#'
    },
    {
        title: 'Luna',
        text: 'Energetica e brincalhona, adora crianças e outros cachorros. Faz amisades com muita facilidade.',
        img: 'img/friendi.jpg',
        link: '#'
    }


];


function renderCards() {
    cardElement.innerHTML = "";
    for (card of cards) {
        var divColElement = document.createElement('div');
        divColElement.setAttribute('class', 'col-md-3');

        var divCardElement = document.createElement('div');
        divCardElement.setAttribute('class', 'card mb-3 box-shadow');

        var imgElement = document.createElement('img');
        imgElement.setAttribute('class', 'card-img-top');
        imgElement.setAttribute('src', card.img);
        imgElement.setAttribute('height', 200);

        var divBodyElement = document.createElement('div');
        divBodyElement.setAttribute('class', 'card-body');

        var divTitleElement = document.createElement('h5');
        divTitleElement.setAttribute('class', 'text-center');
        var cardTitle = document.createTextNode(card.title);
        divTitleElement.appendChild(cardTitle);

        var divTextElement = document.createElement('p');
        divTextElement.setAttribute('class', 'card-text');
        var cardText = document.createTextNode(card.text);
        divTextElement.appendChild(cardText);

        var divButtonsElement = document.createElement('div');
        divButtonsElement.setAttribute('class', 'd-flex justify-content-between align-items-center');

        var divBntsElement = document.createElement('div');
        divBntsElement.setAttribute('class', 'btn-group');
        divButtonsElement.appendChild(divBntsElement);

        var buttonElement = document.createElement('button');
        buttonElement.setAttribute('class', 'btn btn-sm btn-outline-secondary');

        var button2Element = document.createElement('button');
        button2Element.setAttribute('class', 'btn btn-sm btn-outline-secondary');

        var buttonText = document.createTextNode('ver+');
        buttonElement.appendChild(buttonText);
        divBntsElement.appendChild(buttonElement);

        var button2Text = document.createTextNode('Apadrinhar');
        button2Element.appendChild(button2Text);
        divBntsElement.appendChild(button2Element);

        var divAdotarElement = document.createElement('div');
        divAdotarElement.setAttribute('class', 'text-muted text-center');

        var aAdotarElement = document.createElement('a');
        aAdotarElement.setAttribute('href', card.link);

        var imgAdotarElement = document.createElement('img');
        imgAdotarElement.setAttribute('src', 'img/favicon.png');

        var pAdotarElement = document.createElement('p');
        pAdotarElement.setAttribute('style', 'color: #28a745 !important');
        var textAdotarElement = document.createTextNode('Acolher');

        aAdotarElement.appendChild(imgAdotarElement);
        pAdotarElement.appendChild(textAdotarElement);
        aAdotarElement.appendChild(pAdotarElement);
        divAdotarElement.appendChild(aAdotarElement);
        divButtonsElement.appendChild(divAdotarElement);


        divBodyElement.appendChild(divTitleElement);
        divBodyElement.appendChild(divTextElement);
        divBodyElement.appendChild(divButtonsElement);
        divCardElement.appendChild(imgElement);
        divCardElement.appendChild(divBodyElement);
        divColElement.appendChild(divCardElement);
        cardElement.appendChild(divColElement);

    }
}

renderCards();