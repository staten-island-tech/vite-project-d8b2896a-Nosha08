import '../styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {realEstate} from './array.js'

AOS.init()

const DOMSelectors = {
  display: document.querySelector('.display'),
  button1: document.querySelector('.buttonAll'),
  button2: document.querySelector('.buttonAfford'),
  button3: document.querySelector('.buttonInflation'),
  button4: document.querySelector('.buttonAlphabet'),
  theme: document.querySelector('.theme')
}

function render(properties) {
  remove()
  properties.forEach((property) => {
    DOMSelectors.display.insertAdjacentHTML('beforeend', `
      <div class='card'>
        <h1>${property.name}</h1>
        <h2>${property.location}</h2>
        <img src='${property.image}'>
        <p>${property.description}</p>
        <h2>Evan can afford: ${property.EvanCanAfford}</h2>
        <h1>$${property.price.toLocaleString()}</h2>
      </div>
    `)
  })
}

function remove() {
  DOMSelectors.display.innerHTML = ''
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.buttonAll')) {
    render(realEstate)
  } else if (event.target.matches('.buttonAfford')) {
    render(realEstate.filter((property) => property.EvanCanAfford))
  } else if (event.target.matches('.buttonInflation')) {
    render(realEstate.map((property) => ({...property, price: property.price * 1000})))
  } else if (event.target.matches('.buttonAlphabet')) {
    render(realEstate.slice().sort((a, b) => a.name.localeCompare(b.name)))
  }
})

DOMSelectors.theme.addEventListener('click', function () {
  if (document.body.classList.contains('vacation')) {
    document.body.classList.add('professional')
    document.body.classList.remove('vacation')
  } else {
    document.body.classList.add('vacation')
    document.body.classList.remove('professional')
  }
})

console.log(realEstate)
