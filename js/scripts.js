//## Eliminación de elementos

//Crea una función que sea capaz de elimar el boton que pulsas

const firstButton = document.getElementById('firstButton');

firstButton.addEventListener('click', event => {
    firstButton.removeChild(event.target);
});

// Crea una función que elimine el botón siguiente al que has pulsado, si no hubiera botón siguiente, elimina el anterior, y no hay ni anterior ni siguiente se elimina el mismo.

const secondButton = document.getElementById('secondButton');

secondButton.addEventListener('click', event => {
    const nextButton = event.target.nextElementSibling;
    const prevButton = event.target.previousElementSibling;
    if (nextButton) {
        secondButton.removeChild(nextButton);
        console.log('Eliminado botón siguiente');
    } else if (prevButton) {
        secondButton.removeChild(event.target.previousElementSibling);
        console.log('Eliminado botón anterior');
    } else {
        secondButton.removeChild(event.target);
        console.log('Eliminado el botón pulsado');
    }
});

//Crea una función que permita añadir elementos a la lista con la misma estructura que te doy en el ejemplo, además cada vez que pulses el botón de la X debe eliminar el elemento de la lista que has pulsado.

const thirtButton = document.getElementById('thirtButton');
const list = document.getElementById('list');

thirtButton.addEventListener('click', () => {
  const newItem = document.createElement('li');
  const itemText = document.createTextNode(`Elemento ${list.childElementCount + 1}`);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = ' X ';

  deleteButton.addEventListener('click', () => {
    list.removeChild(newItem);
  });

  newItem.appendChild(itemText);
  newItem.appendChild(deleteButton);
  list.appendChild(newItem);
});
