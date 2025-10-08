/******/ (() => { // webpackBootstrap
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
//  function destroySwiper() {
//  if(currentInstance) {
//    currentInstance.destroy(true, true);
//    sliderInstances.delete(selector);
//    currentInstance = null;
//  }
//    const slides = sliderElement.querySelectorAll(".swiper-pagination");
//  slides.forEach((slide) => {
//    slide.style.width = "";
//  }
//});

//function handleResize() {
//    if (window.innerWidth <= 768) { // 768px - это пример порога ширины окна, при котором свайпер отключается
//        swiper.destroy(true, true); // true, true - уничтожает также слайды и сохраняет текущую позицию
//        console.log('Свайпер отключен (destroy)');
//    } else {
//        // Если нужно, чтобы свайпер включался обратно, при изменении размера окна,
//        // нужно будет пересоздать его экземпляр.
//        // Это более сложная логика, в зависимости от вашей реализации Swiper.
//        // Если вам нужен режим, когда свайпер включается обратно:
//        // if (!swiper) {
//        //     swiper = new Swiper('.swiper-container', { /* ваши опции */ });
//        // }
//    }
//}

//// Добавляем обработчик события resize
//window.addEventListener('resize', handleResize);

//// Первый запуск при загрузке страницы
//handleResize();

var toggleButton = document.getElementById("iconButton");
var toggleText = toggleButton.querySelector(".open_icon_text");
var mainImg = document.querySelector(".open_img");
var slideToggle = document.querySelectorAll(".brands_services");
var isExpanded = false;
toggleButton.addEventListener("click", function () {
  if (isExpanded) {
    slideToggle.forEach(function (item, index) {
      if (window.innerWidth >= 1010) {
        if (index >= 8) item.classList.add("hidden");
      } else if (window.innerWidth >= 766) {
        if (index >= 6) item.classList.add("hidden");
      }
    });
    toggleText.textContent = "Показать всё";
    mainImg.classList.remove("rotated");
  } else {
    slideToggle.forEach(function (item) {
      return item.classList.remove("hidden");
    });
    toggleText.textContent = "Скрыть";
    mainImg.classList.add("rotated");
  }
  isExpanded = !isExpanded;
});
/******/ })()
;