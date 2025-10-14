import '../assets/scss/style.scss';


const swiperServicesr = new Swiper('.swiper_services', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, });

const swiperRepair = new Swiper('.swiper_repair', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperPrices = new Swiper('.swiper_prices', {
  slidesPerView: 'auto',
  spaceBetween: 0,
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
      } else if (window.innerWidth >= 766) {
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



//// Получаем элементы модальных окон
//const feedbackModal = document.querySelector('.feedback_container');
//const callModal = document.querySelector('.call_container');
//const sidebarModal = document.querySelector('.sidebar');

//// Функция закрытия всех модальных окон
//function closeAllModals() {
//  feedbackModal.style.display = 'none';
//  callModal.style.display = 'none';
//  sidebarModal.style.display = 'none';
//  document.body.style.overflow = '';
//}

//// Функция открытия формы обратной связи
//function openFeedbackModal() {
//  closeAllModals();
//  feedbackModal.style.display = 'block';
//  document.body.style.overflow = 'hidden';
//}

//// Функция открытия формы заказа звонка
//function openCallModal() {
//  closeAllModals();
//  callModal.style.display = 'block';
//  document.body.style.overflow = 'hidden';
//}

//// Функция открытия бокового меню
//function openSidebar() {
//  closeAllModals();
//  sidebarModal.style.display = 'block';
//  document.body.style.overflow = 'hidden';
//}

//// Инициализация после загрузки DOM
//document.addEventListener('DOMContentLoaded', function () {
//  // Обработчики для иконок в основном контенте
//  const chatIcons = document.querySelectorAll('.icon[src*="chat"]');
//  chatIcons.forEach(icon => {
//    icon.addEventListener('click', openFeedbackModal);
//  });

//  const profileIcon = document.querySelector('.icon[src*="profile"]');
//  if (profileIcon) {
//    profileIcon.addEventListener('click', openCallModal);
//  }

//  const burgerIcon = document.querySelector('.icon[src*="burger"]');
//  if (burgerIcon) {
//    burgerIcon.addEventListener('click', openSidebar);
//  }

//  // Обработчики для иконок в sidebar
//  const sidebarChatIcons = document.querySelectorAll('.sidebar .icon[src*="chat"]');
//  sidebarChatIcons.forEach(icon => {
//    icon.addEventListener('click', openFeedbackModal);
//  });

//  const sidebarProfileIcon = document.querySelector('.sidebar .icon[src*="profile"]');
//  if (sidebarProfileIcon) {
//    sidebarProfileIcon.addEventListener('click', openCallModal);
//  }

//  // Обработчики для контактной информации в sidebar
//  const sidebarPhone = document.querySelector('.sidebar .contact_info_namber');
//  const sidebarEmail = document.querySelector('.sidebar .contact_info_mail');

//  if (sidebarPhone) {
//    sidebarPhone.addEventListener('click', openCallModal);
//  }

//  if (sidebarEmail) {
//    sidebarEmail.addEventListener('click', openFeedbackModal);
//  }

//  // Закрытие через кнопки закрытия
//  const closeButtons = document.querySelectorAll('.round_button--close-form');
//  closeButtons.forEach(button => {
//    button.addEventListener('click', closeAllModals);
//  });

//  // Закрытие при клике вне модального окна
//  document.addEventListener('click', function (event) {
//    if (event.target === feedbackModal) {
//      closeAllModals();
//    }
//    if (event.target === callModal) {
//      closeAllModals();
//    }
//    if (event.target === sidebarModal) {
//      closeAllModals();
//    }
//  });

//  // Закрытие по клавише Escape
//  document.addEventListener('keydown', function (event) {
//    if (event.key === 'Escape') {
//      closeAllModals();
//    }
//  });
//});

// Получаем элементы модальных окон
const feedbackModal = document.querySelector('.feedback_container');
const callModal = document.querySelector('.call_container');

// Функция закрытия всех модальных окон
function closeAllModals() {
  feedbackModal.style.display = 'none';
  callModal.style.display = 'none';
  document.body.style.overflow = '';
}

// Функция открытия формы обратной связи
function openFeedbackModal() {
  closeAllModals();
  feedbackModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Функция открытия формы заказа звонка
function openCallModal() {
  closeAllModals();
  callModal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  // Кнопки открытия
  const chatButton = document.querySelector('.round-button--chat');
  const callButton = document.querySelector('.round-button--call');

  // Назначаем обработчики на кнопки открытия
  if (chatButton) {
    chatButton.addEventListener('click', openFeedbackModal);
  }

  if (callButton) {
    callButton.addEventListener('click', openCallModal);
  }

  // Кнопки закрытия
  const closeButtons = document.querySelectorAll('.round_button--close');
  closeButtons.forEach(button => {
    button.addEventListener('click', closeAllModals);
  });

  // Закрытие при клике вне модального окна
  document.addEventListener('click', function (event) {
    if (event.target === feedbackModal) {
      closeAllModals();
    }
    if (event.target === callModal) {
      closeAllModals();
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });

  // Обработка отправки форм
  const feedbackForm = document.querySelector('.feedback_form');
  const callForm = document.querySelector('.call_form');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Здесь можно добавить AJAX отправку формы
      console.log('Форма обратной связи отправлена');
      closeAllModals();
    });
  }

  if (callForm) {
    callForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Здесь можно добавить AJAX отправку формы
      console.log('Форма заказа звонка отправлена');
      closeAllModals();
    });
  }

  // Обработка кликов на кнопки отправки (так как они div, а не button)
  const submitButtons = document.querySelectorAll('.red_button--form');
  submitButtons.forEach(button => {
    button.addEventListener('click', function () {
      const form = this.closest('form');
      if (form) {
        form.dispatchEvent(new Event('submit', { bubbles: true }));
      }
    });
  });
});

// Делаем функции глобальными для использования из HTML
window.openFeedbackModal = openFeedbackModal;
window.openCallModal = openCallModal;
window.closeAllModals = closeAllModals;