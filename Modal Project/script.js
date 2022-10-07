'use strict';
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var buttonCloseModal = document.querySelector('.close-modal');
var buttonsShowModal = document.querySelectorAll('.show-modal');
console.log(buttonsShowModal);

var openModal = function () {
  //   console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // modal.style.display = 'block'; same as hidden block
};

var closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < buttonsShowModal.length; i++)
  buttonsShowModal[i].addEventListener('click', openModal);

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //   console.log('A Key was pressed.');
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
