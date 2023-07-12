//## Eliminación de elementos

//Crea una función que sea capaz de elimar el boton que pulsas

const firstButton = document.getElementById('firstButton');

firstButton.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return;
  event.target.remove();
});

// Crea una función que elimine el botón siguiente al que has pulsado, si no hubiera botón siguiente, elimina el anterior, y no hay ni anterior ni siguiente se elimina el mismo.

const secondButton = document.getElementById('secondButton');

secondButton.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return;
  const nextButton = event.target.nextElementSibling;
  const prevButton = event.target.previousElementSibling;
  if (nextButton) {
    nextButton.remove();
    console.log('Eliminado botón siguiente');
  } else if (prevButton) {
    prevButton.remove();

    console.log('Eliminado botón anterior');
  } else {
    event.target.remove();

    console.log('Eliminado el botón pulsado');
  }
});

//Crea una función que permita añadir elementos a la lista con la misma estructura que te doy en el ejemplo, además cada vez que pulses el botón de la X debe eliminar el elemento de la lista que has pulsado.

const thirtButton = document.getElementById('thirtButton');
const list = document.getElementById('list');

thirtButton.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return;
  const newItem = document.createElement('li');
  const itemText = document.createTextNode(
    `Elemento ${list.childElementCount + 1}`
  );
  const deleteButton = document.createElement('button');
  deleteButton.textContent = ' X ';

  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);
  list.appendChild(newItem);
});

list.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return;
  event.target.parentElement.remove();
});
