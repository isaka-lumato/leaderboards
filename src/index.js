import './style.css';
import create from './createGame.js';
import getData from './get.js';
import display from './display.js';
import alertValid from './validation.js';

const submitBtn = document.getElementById('sub-btn');
const refreshBtn = document.querySelector('#ref-btn');

const user = document.querySelector('#name');
const score = document.querySelector('#score');

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  if (user.value === '') {
    alertValid('player name', 'danger');
    return;
  }
  if (score.value === '') {
    alertValid('score', 'danger');
    return;
  }
  create(user.value, score.value);
  user.value = '';
  score.value = '';
  window.location.href = './index.html';

  await display();
});

refreshBtn.addEventListener('click', async (e) => {
  e.preventDefault();

  // window.location.href = './index.html';
  await display();
});

document.addEventListener('DOMContentLoaded', async () => {
  await getData();
  await display();
});
