import FizzBuzz from './fizzbuzz.js';

const form = document.querySelector('#fizzbuzz-form');
const numberInput = document.querySelector('#fizzbuzz-number');
const result = document.querySelector('#fizzbuzz-result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const number = Number.parseInt(numberInput.value, 10);
  result.innerHTML = `<p>${FizzBuzz(number)}</p>`;
});
