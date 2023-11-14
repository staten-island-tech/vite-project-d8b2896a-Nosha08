import '../styles/style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {realEstate} from './array.js'

AOS.init()

const DOMSelectors = {
  display: document.querySelector('.display'),
  button1: document.querySelector('.buttonAll'),
  button2: document.querySelector('.buttonTest'),
}

DOMSelectors.button1.addEventListener('click', function () {
  const div = DOMSelectors.display;
  remove(div)
  realEstate.forEach((property) => {
    DOMSelectors.display.insertAdjacentHTML('beforeend', `
      <h1>${property.name}</h1>
    `)
  })
})

DOMSelectors.button2.addEventListener('click', function () {
  const div = DOMSelectors.display;
  remove(div)
  const a = realEstate.filter((x) => x.placeholder === true)
  a.forEach((property) => {
    DOMSelectors.display.insertAdjacentHTML('beforeend', `
      <h1>${property.name}</h1>
    `)
  })
})

function remove(div) {
  div.innerHTML = ''
}

console.log(realEstate)
