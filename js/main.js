const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 0,

  //slidesPerView: 1.3,
  //spaceBetween: 32,
  //slidesOffsetBefore: 16,
  //    slidesOffsetAfter: 16,
  //    centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const toggleButton = document.getElementById("iconButton");
const toggleText = toggleButton.querySelector(".open_icon_text");
const mainImg = document.querySelector(".open_img");
const slideToggle = document.querySelectorAll(".brands_services");
let isExpanded = false;
toggleButton.addEventListener("click", () => {
  if (isExpanded) {
    slideToggle.forEach((item, index) => {
      if (window.innerWidth >= 1010) {
        if (index >= 8) item.classList.add("hidden");
      } else if (window.innerWidth >= 768) {
        if (index >= 6) item.classList.add("hidden");
      }
    });
    toggleText.textContent = "Показать всё";
    mainImg.classList.remove("rotated");
  } else {
    slideToggle.forEach(item => item.classList.remove("hidden"));
    toggleText.textContent = "Скрыть";
    mainImg.classList.add("rotated");
  }
  isExpanded = !isExpanded;
});

//const toggleButton = document.getElementById("iconButton");
//const toggleText = toggleButton.querySelector(".open_icon_text");
//const mainImg = document.querySelector(".open_img");
//const closeImg = document.querySelector(".element_stail");
//const slideToggle = document.querySelectorAll(".brands_services");
//let isExpanded = false;
//toggleButton.addEventListener("click", () => {
//  if (isExpanded) {
//    slideToggle.forEach((item, index) => {
//      if (window.innerWidth >= 1010) {
//        if (index >= 8) item.classList.add("hidden");
//      } else if (window.innerWidth >= 768) {
//        if (index >= 6) item.classList.add("hidden");
//      }
//    });
//    toggleText.textContent = "Показать всё";
//    mainImg.classList.remove("element_stail");
//    mainImg.classList.add("open_img");
    
//  } else {
//    slideToggle.forEach(item => item.classList.remove("hidden"));
//    toggleText.textContent = "Скрыть";
//    mainImg.classList.remove("nul");
//    mainImg.classList.add("element_stail");


//  }
//  isExpanded = !isExpanded;
//});