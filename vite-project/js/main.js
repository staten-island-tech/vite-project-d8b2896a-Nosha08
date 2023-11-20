import '../styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {realEstate} from './array.js'

AOS.init()

const DOMSelectors = {
  display: document.querySelector('.display'),
  button1: document.querySelector('.buttonAll'),
  button2: document.querySelector('.buttonAfford'),
  button3: document.querySelector('.buttonTest')
}

DOMSelectors.button1.addEventListener('click', function () {
  const div = DOMSelectors.display;
  remove(div)

  realEstate.forEach((property) => {
    DOMSelectors.display.insertAdjacentHTML('beforeend', `
    <div class='card'>
      <h1>${property.name}</h1>
      <h2>${property.location}</h2>
      <p>${property.description}</p>
      <h2>Evan can afford: ${property.EvanCanAfford}</h2>
      <h1>$${property.price}</h2>
    </div>
    `)
  })
})

DOMSelectors.button2.addEventListener('click', function () {
  const div = DOMSelectors.display;
  remove(div)

  const affordable = realEstate.filter((x) => x.EvanCanAfford === true)
  affordable.forEach((property) => {
    DOMSelectors.display.insertAdjacentHTML('beforeend', `
    <div class='card'>
      <h1>${property.name}</h1>
      <h2>${property.location}</h2>
      <p>${property.description}</p>
      <h2>Evan can afford: ${property.EvanCanAfford}</h2>
      <h1>$${property.price}</h2>
    </div>
    `)
  })
})

DOMSelectors.button3.addEventListener('click', function () {
  const div = DOMSelectors.display;
  remove(div);

  const inflatedPropertyHTML = realEstate.map((property) => {
    const inflatedPrice = property.price * 10; // Simulating 10x price inflation

    return `
      <div class='card'>
        <h1>${property.name}</h1>
        <h2>${property.location}</h2>
        <p>${property.description}</p>
        <h2>Evan can afford: ${property.EvanCanAfford}</h2>
        <h1>$${inflatedPrice}</h2> <!-- Displaying the inflated price -->
      </div>
    `;
  }).join('');

  DOMSelectors.display.insertAdjacentHTML('beforeend', inflatedPropertyHTML);
})

function remove(div) {
  div.innerHTML = ''
}

console.log(realEstate)
