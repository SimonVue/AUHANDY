'use strict'

/* ========================= popup ========================= */
const modal = document.getElementById('form');
const btn = document.getElementById('learn');
const span = document.getElementsByClassName('form-close')[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
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

