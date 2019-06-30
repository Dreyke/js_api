const app = document.getElementById('root');
const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Create a  request variable and assign a new XMLHttpRequest object to it
const request = new XMLHttpRequest();

// open a new connection using GET on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {
    const data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            // Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            // create an h1 and set the text content to the films title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            // create a p and set text content to films description
            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300);
            p.textContent = `${movie.description}...`; //end an ellipses

            container.appendChild(card);

            // each card contains an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
        })
    } else {
        console.log('error')
    }
};

// send request
request.send();