


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


//// Получаем элементы всех модальных окон
const feedbackModal = document.querySelector('.feedback_container');
const callModal = document.querySelector('.call_container');
const sidebar = document.querySelector('.sidebar');

// Функция закрытия всех модальных окон
function closeAllModals() {
  if (feedbackModal) feedbackModal.style.display = 'none';
  if (callModal) callModal.style.display = 'none';

  // Для sidebar на маленьких экранах
  if (window.innerWidth < 1119 && sidebar) {
    sidebar.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.position = '';
  }
}

// Функция открытия формы обратной связи
function openFeedbackModal() {
  closeAllModals();
  if (feedbackModal) {
    feedbackModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.innerWidth <= 768) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
  }
}

// Функция открытия формы заказа звонка
function openCallModal() {
  closeAllModals();
  if (callModal) {
    callModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    if (window.innerWidth <= 768) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
  }
}

// Функция открытия/закрытия sidebar
function toggleSidebar() {
  // На разрешении 1119px и больше sidebar всегда видим
  if (window.innerWidth >= 1119) {
    return; // Ничего не делаем на больших экранах
  }

  // На меньших разрешениях работаем как модальное окно
  if (sidebar.style.display === 'flex' || sidebar.classList.contains('sidebar-container--opened')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  if (window.innerWidth < 1119) {
    closeAllModals();
    sidebar.style.display = 'flex';
    sidebar.classList.add('round-button--burger');
    document.body.style.overflow = 'hidden';
    if (window.innerWidth <= 768) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
  }
}

function closeSidebar() {
  if (window.innerWidth < 1119) {
    sidebar.style.display = 'none';
    sidebar.classList.remove('sidebar-container--opened');
    document.body.style.overflow = '';
    document.body.style.position = '';
  }
}

// Обработка изменения размера окна
function handleResize() {
  // Для sidebar на больших разрешениях
  if (window.innerWidth >= 1119) {
    sidebar.style.display = 'flex';
    sidebar.classList.remove('sidebar-container--opened');
    document.body.style.overflow = '';
    document.body.style.position = '';
  } else {
    // Если на мобильных было открыто модальное окно
    const anyModalOpen = (feedbackModal && feedbackModal.style.display === 'flex') ||
      (callModal && callModal.style.display === 'flex') ||
      (sidebar && (sidebar.style.display === 'flex' || sidebar.classList.contains('sidebar-container--opened')));

    if (anyModalOpen && window.innerWidth <= 768) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else if (anyModalOpen) {
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
  // Гарантируем, что модальные окна закрыты при загрузке
  closeAllModals();

  // Для sidebar: на больших разрешениях показываем, на маленьких скрываем
  if (window.innerWidth >= 1119) {
    sidebar.style.display = 'flex';
  } else {
    sidebar.style.display = 'none';
  }

  // Кнопки открытия для feedback и call
  const chatButtons = document.querySelectorAll('.round-button--chat');
  const callButtons = document.querySelectorAll('.round-button--call');

  // Назначаем обработчики на все кнопки чата
  chatButtons.forEach(button => {
    button.addEventListener('click', openFeedbackModal);
  });

  // Назначаем обработчики на все кнопки звонка
  callButtons.forEach(button => {
    button.addEventListener('click', openCallModal);
  });

  // Кнопка открытия sidebar (бургер)
  const burgerButton = document.querySelector('.round-button--burger');
  if (burgerButton) {
    burgerButton.addEventListener('click', toggleSidebar);
  }

  // Кнопки закрытия (включая бургер, который может быть кнопкой закрытия в sidebar)
  const closeButtons = document.querySelectorAll('.round_button--close');
  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Если это кнопка в sidebar, закрываем только sidebar
      if (this.closest('.sidebar')) {
        closeSidebar();
      } else {
        closeAllModals();
      }
    });
  });

  // Закрытие при клике вне модального окна
  document.addEventListener('click', function (event) {
    if (event.target === feedbackModal) {
      closeAllModals();
    }
    if (event.target === callModal) {
      closeAllModals();
    }
    if (event.target === sidebar && window.innerWidth < 1119) {
      closeSidebar();
    }
  });

  // Закрытие по клавише Escape
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllModals();
      closeSidebar();
    }
  });
  

  // Обработчик изменения размера окна
  window.addEventListener('resize', handleResize);
});

// Делаем функции глобальными для использования из HTML
window.openFeedbackModal = openFeedbackModal;
window.openCallModal = openCallModal;
window.toggleSidebar = toggleSidebar;
window.closeAllModals = closeAllModals;
window.closeSidebar = closeSidebar;



//// Получаем элементы всех модальных окон
//const feedbackModal = document.querySelector('.feedback_container');
//const callModal = document.querySelector('.call_container');
//const sidebar = document.querySelector('.sidebar');

//// Функция закрытия всех модальных окон
//function closeAllModals() {
//  if (feedbackModal) {
//    feedbackModal.style.display = 'none';
//    feedbackModal.classList.remove('modal--open');
//  }
//  if (callModal) {
//    callModal.style.display = 'none';
//    callModal.classList.remove('modal--open');
//  }

//  // Для sidebar на маленьких экранах
//  if (window.innerWidth < 1119 && sidebar) {
//    sidebar.classList.remove('sidebar_conteiner--open');
//    document.body.style.overflow = '';
//    document.body.style.position = '';
//  }

//  // Убираем overlay если есть
//  const overlay = document.querySelector('.modal-overlay');
//  if (overlay) {
//    overlay.remove();
//  }
//}

//// Функция открытия формы обратной связи
//function openFeedbackModal() {
//  closeAllModals();
//  if (feedbackModal) {
//    feedbackModal.style.display = 'flex';
//    feedbackModal.classList.add('modal--open');
//    document.body.style.overflow = 'hidden';
//    if (window.innerWidth <= 768) {
//      document.body.style.position = 'fixed';
//      document.body.style.width = '100%';
//    }
//    createOverlay();
//  }
//}

//// Функция открытия формы заказа звонка
//function openCallModal() {
//  closeAllModals();
//  if (callModal) {
//    callModal.style.display = 'flex';
//    callModal.classList.add('modal--open');
//    document.body.style.overflow = 'hidden';
//    if (window.innerWidth <= 768) {
//      document.body.style.position = 'fixed';
//      document.body.style.width = '100%';
//    }
//    createOverlay();
//  }
//}

//// Функция открытия sidebar
//function openSidebar() {
//  // На разрешении 1119px и больше sidebar всегда видим
//  if (window.innerWidth >= 1119) {
//    return; // Ничего не делаем на больших экранах
//  }

//  // На меньших разрешениях работаем как модальное окно
//  closeAllModals();
//  sidebar.classList.add('sidebar_container--open');
//  document.body.style.overflow = 'hidden';
//  if (window.innerWidth <= 768) {
//    document.body.style.position = 'fixed';
//    document.body.style.width = '100%';
//  }
//  createOverlay();
//}

//// Функция создания overlay для закрытия по клику вне окна
//function createOverlay() {
//  // Удаляем существующий overlay
//  const existingOverlay = document.querySelector('.modal-overlay');
//  if (existingOverlay) {
//    existingOverlay.remove();
//  }

//  // Создаем новый overlay
//  const overlay = document.createElement('div');
//  overlay.className = 'modal-overlay';
//  overlay.style.cssText = `
//        position: fixed;
//        top: 0;
//        left: 0;
//        width: 100%;
//        height: 100%;
//        background: transparent;
//        z-index: 999;
//        cursor: default;
//    `;

//  overlay.addEventListener('click', closeAllModals);
//  document.body.appendChild(overlay);
//}

//// Обработка изменения размера окна
//function handleResize() {
//  // Для sidebar на больших разрешениях
//  if (window.innerWidth >= 1119) {
//    sidebar.classList.remove('sidebar--open');
//    document.body.style.overflow = '';
//    document.body.style.position = '';

//    // Убираем overlay на больших экранах
//    const overlay = document.querySelector('.modal-overlay');
//    if (overlay) {
//      overlay.remove();
//    }
//  } else {
//    // Если уменьшили экран и sidebar был открыт - закрываем его
//    if (sidebar.classList.contains('sidebar_container--open')) {
//      closeAllModals();
//    }

//    // Если на мобильных было открыто модальное окно
//    const anyModalOpen = (feedbackModal && feedbackModal.classList.contains('modal--open')) ||
//      (callModal && callModal.classList.contains('modal--open')) ||
//      (sidebar && sidebar.classList.contains('sidebar--open'));

//    if (anyModalOpen && window.innerWidth <= 768) {
//      document.body.style.position = 'fixed';
//      document.body.style.width = '100%';
//    } else if (anyModalOpen) {
//      document.body.style.position = '';
//      document.body.style.width = '';
//    }
//  }
//}

//// Инициализация после загрузки DOM
//document.addEventListener('DOMContentLoaded', function () {
//  // Гарантируем, что модальные окна закрыты при загрузке
//  closeAllModals();

//  // Для sidebar: на больших разрешениях показываем, на маленьких скрываем
//  if (window.innerWidth >= 1119) {
//    sidebar.style.display = 'flex';
//  } else {
//    sidebar.style.display = 'none';
//  }

//  // Кнопки открытия для feedback и call
//  const chatButtons = document.querySelectorAll('.round-button--chat');
//  const callButtons = document.querySelectorAll('.round-button--call');

//  // Назначаем обработчики на все кнопки чата
//  chatButtons.forEach(button => {
//    button.addEventListener('click', openFeedbackModal);
//  });

//  // Назначаем обработчики на все кнопки звонка
//  callButtons.forEach(button => {
//    button.addEventListener('click', openCallModal);
//  });

//  // Кнопка открытия sidebar (бургер)
//  const burgerButton = document.querySelector('.round-button--burger');
//  if (burgerButton) {
//    burgerButton.addEventListener('click', openSidebar);
//  }

//  // Кнопки закрытия в модальных окнах форм
//  const closeButtons = document.querySelectorAll('.round-button--close-menu');
//  closeButtons.forEach(button => {
//    button.addEventListener('click', closeAllModals);
//  });

//  // Кнопка закрытия в sidebar (бургер с классом round-button--close)
//  const sidebarCloseButtons = document.querySelectorAll('.sidebar .round-button--close');
//  sidebarCloseButtons.forEach(button => {
//    button.addEventListener('click', closeAllModals);
//  });

//  // Закрытие по клавише Escape
//  document.addEventListener('keydown', function (event) {
//    if (event.key === 'Escape') {
//      closeAllModals();
//    }
//  });

//  // Обработка отправки форм
//  const feedbackForm = document.querySelector('.feedback_form');
//  const callForm = document.querySelector('.call_form');

//  if (feedbackForm) {
//    feedbackForm.addEventListener('submit', function (event) {
//      event.preventDefault();
//      console.log('Форма обратной связи отправлена');
//      closeAllModals();
//    });
//  }

//  if (callForm) {
//    callForm.addEventListener('submit', function (event) {
//      event.preventDefault();
//      console.log('Форма заказа звонка отправлена');
//      closeAllModals();
//    });
//  }

//  // Обработка кликов на кнопки отправки (так как они div, а не button)
//  const submitButtons = document.querySelectorAll('.red_button--form');
//  submitButtons.forEach(button => {
//    button.addEventListener('click', function () {
//      const form = this.closest('form');
//      if (form) {
//        if (form.checkValidity()) {
//          form.dispatchEvent(new Event('submit', { bubbles: true }));
//        } else {
//          form.reportValidity();
//        }
//      }
//    });
//  });

//  // Обработчик изменения размера окна
//  window.addEventListener('resize', handleResize);
//});

//// Делаем функции глобальными для использования из HTML
//window.openFeedbackModal = openFeedbackModal;
//window.openCallModal = openCallModal;
//window.openSidebar = openSidebar;
//window.closeAllModals = closeAllModals;



