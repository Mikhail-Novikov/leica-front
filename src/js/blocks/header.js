'use strict';

export default header;

header.stickyPoint = 50;

header.bindUIActions = function () {
  document.addEventListener('click', headerToggle);
  document.addEventListener('click', headerAuthToggle);
  document.addEventListener('click', pageLoginToggle);  
  window.addEventListener('scroll', headerSticky);
};

function header() {
  header.bindUIActions();
  headerSticky();
}

function headerToggle(event) {
  let target = event.target;
  if (target.closest('.header__toggle')) {
    target.closest('.header').classList.toggle('header--open');
    document.body.classList.toggle('page__body--header-open');
  }
}

function headerAuthToggle(event) {
  let target = event.target;
  if (target.closest('.header__btn-auth')) {
    target.closest('.header__btn-auth').classList.toggle('header__auth--open');
  } else {
    document.querySelectorAll('.header__btn-auth').forEach(function (item) {
      item.classList.remove('header__auth--open');
    });
  }
}

function pageLoginToggle(event) {
  let target = event.target;
  if (target.closest('.js_in')) {
    target.closest('.header__hidden').classList.toggle('login--yes');
  } else if(target.closest('.js_out')){
    target.closest('.header__hidden').classList.remove('login--yes');
  }
}


function headerSticky() {
  if (document.querySelector('.header')) {
    let headerClassList = document.querySelector('.header').classList;
    if (pageYOffset >= header.stickyPoint) {
      headerClassList.add('header--sticky');
      if (headerClassList.contains('header--transparent--yes')) {
        headerClassList.remove('header--transparent--yes');
        headerClassList.add('header--transparent--no');
      }
    } else {
      headerClassList.remove('header--sticky');
      if (headerClassList.contains('header--transparent--no')) {
        headerClassList.remove('header--transparent--no');
        headerClassList.add('header--transparent--yes');
      }
    }
  }
} 