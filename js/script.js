'use strict'

/* ======================= animation ====================== */
const animItems = document.querySelectorAll('._anim-items');


if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - innerHeight / animStart;
      }

      if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('_active');
      } else {
        animItem.classList.remove('_active');
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollY || document.documentElement.scrollLeft,
      scrollТop = window.scrollY || document.documentElement.scrollТop;
    return { top: rect.top + scrollТop, left: rect.left + scrollLeft }
  };
  animOnScroll();
}


/* ======================= show-header ====================== */
window.onscroll = function showHeader() {

  const header = document.querySelector('.header');
  if (window.pageYOffset > 200) {
    header.classList.add('_header-fixed');
  } else {
    header.classList.remove('_header-fixed');
  }
}

/* ================================ popup ================================ */
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

/* ================================= Burger =============================== */
document.querySelector('.menu-burger').onclick = function () {
  open()
};

function open() {
  document.body.classList.toggle('_lock');
  document.getElementById('nav-menu').classList.toggle('_open');
  document.querySelector('.menu-burger').classList.toggle('_close');

}

/* ========================= validation popup form ======================== */
function validation() {
  const formElem = document.querySelector('.promo__form');
  console.log(formElem);
  const formInputs = formElem.querySelectorAll('input');
  console.log(formInputs);
  // const formButton = formElem.querySelector('.button')
  formElem.addEventListener('click', e => {
    formInputs.forEach(formInput => {
      if (formInput.value === '') {
        formInput.classList.add('error')
        e.preventDefault();
      }
    });
  });

  formElem.addEventListener('click', e => {
    formInputs.forEach(formInput => {
      if (formInput.value !== '') {
        formInput.classList.remove('error')
      }
    });
  });

  formElem.addEventListener('input', e => {
    if (!e.target.classList.contains('input')) {
      return;
    }
    e.target.value === ''
      ? e.target.classList.add('error')
      : e.target.classList.remove('error');
  });

}
validation();



/* ======================= validation location form ====================== */
function locationValidation() {
  const locationElem = document.querySelector('.location__form');
  console.log(locationElem);
  const locationInputs = locationElem.querySelectorAll('input');
  console.log(locationInputs);
  // const formButton = formElem.querySelector('.button')
  locationElem.addEventListener('click', e => {
    locationInputs.forEach(locationInput => {
      if (locationInput.value === '') {
        locationInput.classList.add('error')
        e.preventDefault();
      }
    });
  });

  locationElem.addEventListener('click', e => {
    locationInputs.forEach(locationInput => {
      if (locationInput.value !== '') {
        locationInput.classList.remove('error')
      }
    });
  });

  locationElem.addEventListener('input', e => {
    if (!e.target.classList.contains('input')) {
      return;
    }
    e.target.value === ''
      ? e.target.classList.add('error')
      : e.target.classList.remove('error');
  });

}
locationValidation();



