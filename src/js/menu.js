(() => {
  const refs = {   // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-menu]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle("is-open");
  }
})();
const mobileMenu = document.querySelector('[data-menu]');
const menuLinks = document.querySelectorAll('.menu-nav .link');
const closeBtn = document.querySelector('[data-menu-close]');

// Закрытие по кнопке "X"
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});

// Закрытие по клику на любую ссылку
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});