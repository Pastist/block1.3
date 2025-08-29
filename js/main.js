const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  //spaceBetween: 0,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
});
const myDiv = document.getElementById('show-more_ikon');
const toggleButton = document.getElementById('show_icon-readmore');

  toggleButton.addEventListener('click', function() {
      if (myDiv.style.display === 'none') {
        myDiv.style.display = 'block';
        toggleButton.textContent = 'Скрыть';
      } else {
        myDiv.style.display = 'none';
        toggleButton.textContent = 'Показать';
      }
    });