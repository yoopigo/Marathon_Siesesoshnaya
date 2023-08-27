const buttonOpenModal = document.getElementById('openModal');
const modal = document.getElementById('modal');

buttonOpenModal.onclick = () => {
  modal.classList.remove('visually-hidden');
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.classList.add('visually-hidden');
  }
});
