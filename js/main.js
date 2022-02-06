'use strict'

/* ========================= popup ========================= */
const modal = document.getElementById('form');
const btn = document.getElementById('learn');
const span = document.getElementsByClassName('form-close')[0];

btn.onclick = function () {
  document.body.classList.toggle('_lock');
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

/* ========================= Burger ======================== */
document.querySelector('.menu-burger').onclick = function () {
  open()
};

function open() {
  document.body.classList.toggle('_lock');
  document.getElementById('nav-menu').classList.toggle('_open');
  document.querySelector('.menu-burger').classList.toggle('_close');

}

/* ========================= validation ======================== */
function validation() {
  const formElem = document.querySelector('#form');
  console.log(formElem);
  const formInputs = formElem.querySelectorAll('.input');
  const formButton = formElem.querySelector('.button')
  formElem.addEventListener('click', e => {
    formInputs.forEach(formInput => {
      if (formInput.value === '') {
        formInput.classList.add('error')
        e.preventDefault();
      }
    });
  });

  formElem.addEventListener('input', e => {
    if (!e.target.classList.contains('.input')) {
      return;
    }
    e.target.value === ''
      ? e.target.classList.add('error')
      : e.target.classList.remove('error');
  });

}
validation();

