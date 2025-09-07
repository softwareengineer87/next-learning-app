
const btnFront = document.querySelector('#btn-front');
const btnBack = document.querySelector('#btn-back');
const divFront = document.querySelector('#frontend');
const divBack = document.querySelector('#backend');
const choices = document.querySelector('.choices');
const techs = document.querySelector('.techs');
const btnTech = document.querySelector('#btn-tech');

import { Element } from './Element.js';
const el = new Element();
const box = el.createElement('div', 'box');

function choice(message) {
  if (choices.firstChild) {
    choices.firstElementChild.remove();
  }
  const p = el.createElement('p');
  p.textContent = message;
  choices.appendChild(p);
}
function handleFront() {
  if (box.firstChild) {
    box.removeChild();
  }
  if (divFront.firstElementChild) {
    divFront.removeChild();
  }
  divFront.appendChild(box);
  const buttonReact = el.createElement('button', 'btn-react');
  buttonReact.textContent = 'aprender react';
  box.appendChild(buttonReact);
  buttonReact.addEventListener('click', () => {
    choice('voce escolheu aprender #react');
  });
  const buttonAngular = el.createElement('button', 'btn-angular');
  buttonAngular.textContent = 'aprender angular';
  box.appendChild(buttonAngular);
  buttonAngular.addEventListener('click', () => {
    choice('voce escolheu aprender #angular');
  });
}

function handleBack() {
  if (divBack.firstElementChild) {
    divBack.removeChild();
  }
  divBack.appendChild(box)
  const buttonJava = el.createElement('button', 'btn-java');
  buttonJava.textContent = 'aprender java';
  box.appendChild(buttonJava);
  buttonJava.addEventListener('click', () => {
    choice('voce escolheu aprender #java');
  });
  const buttonCSharp = el.createElement('button', 'btn-csharp');
  buttonCSharp.textContent = 'aprender c#';
  box.appendChild(buttonCSharp);
  buttonCSharp.addEventListener('click', () => {
    choice('voce escolheu aprender C#');
  });
}

function addTech() {

  const inputTechtext = document.querySelector('#tech');
  if (inputTechtext.value === '') {
    alert('O valor e obrigatorio');
    return;
  }
  const p = el.createElement('p', 'techP');
  p.textContent = inputTechtext.value;
  techs.appendChild(p);
  inputTechtext.value = '';

}

btnFront.addEventListener('click', handleFront);
btnBack.addEventListener('click', handleBack);
btnTech.addEventListener('click', addTech);

