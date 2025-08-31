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
//const myDiv = document.getElementById('show-more_ikon');
//const toggleButton = document.getElementById('open-icon');

//  toggleButton.addEventListener('click', function() {
//      if (myDiv.style.display === 'none') {
//        myDiv.style.display = 'block';
//        toggleButton.textContent = 'Скрыть';
//      } else {
//        myDiv.style.display = 'none';
//        toggleButton.textContent = 'Показать';
//      }
//    });

const iconbutton = document.getElementById("iconbutton");
const toggleText = iconbutton.querySelector(".open_icon_text");
const mainImg = document.querySelector(".main-img");
const gridItems = document.querySelectorAll(".swiper-slide");
btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "Скрыть элемент";
    } else {
        btn.textContent = "Показать элемент";
    }

    content.classList.toggle("hidden");
}