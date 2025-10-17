
import '../assets/scss/style.scss';
import '../index.html';



document.addEventListener("DOMContentLoaded", () => {
  try {

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


////// Получаем элементы всех модальных окон
//const feedbackModal = document.querySelector('.feedback_container');
//const callModal = document.querySelector('.call_container');
//const sidebar = document.querySelector('.sidebar');

//// Функция закрытия всех модальных окон
//function closeAllModals() {
//  if (feedbackModal) feedbackModal.style.display = 'none';
//  if (callModal) callModal.style.display = 'none';

//  // Для sidebar на маленьких экранах
//  if (window.innerWidth < 1119 && sidebar) {
//    sidebar.style.display = 'none';
//    document.body.style.overflow = '';
//    document.body.style.position = '';
//  }
//}

//// Функция открытия формы обратной связи
//function openFeedbackModal() {
//  closeAllModals();
//  if (feedbackModal) {
//    feedbackModal.style.display = 'flex';
//    document.body.style.overflow = 'hidden';
//    if (window.innerWidth <= 768) {
//      document.body.style.position = 'fixed';
//      document.body.style.width = '100%';
//    }
//  }
//}

//// Функция открытия формы заказа звонка
//function openCallModal() {
//  closeAllModals();
//  if (callModal) {
//    callModal.style.display = 'flex';
//    document.body.style.overflow = 'hidden';
//    if (window.innerWidth <= 768) {
//      document.body.style.position = 'fixed';
//      document.body.style.width = '100%';
//    }
//  }
//}

//// Функция открытия/закрытия sidebar
//function toggleSidebar() {
//  // На разрешении 1119px и больше sidebar всегда видим
//  if (window.innerWidth >= 1119) {
//    return; // Ничего не делаем на больших экранах
//  }

//  // На меньших разрешениях работаем как модальное окно
//  if (sidebar.style.display === 'flex' || sidebar.classList.contains('sidebar-container--opened')) {
//    closeSidebar();
//  } else {
//    openSidebar();
//  }
//}

//function openSidebar() {
//  if (window.innerWidth < 1119) {
//    closeAllModals();
//    sidebar.style.display = 'flex';
//    sidebar.classList.add('round-button--burger');
//    document.body.style.overflow = 'hidden';
//    if (window.innerWidth <= 768) {
//      document.body.style.position = 'fixed';
//      document.body.style.width = '100%';
//    }
//  }
//}

//function closeSidebar() {
//  if (window.innerWidth < 1119) {
//    sidebar.style.display = 'none';
//    sidebar.classList.remove('sidebar-container--opened');
//    document.body.style.overflow = '';
//    document.body.style.position = '';
//  }
//}

//// Обработка изменения размера окна
//function handleResize() {
//  // Для sidebar на больших разрешениях
//  if (window.innerWidth >= 1119) {
//    sidebar.style.display = 'flex';
//    sidebar.classList.remove('sidebar-container--opened');
//    document.body.style.overflow = '';
//    document.body.style.position = '';
//  } else {
//    // Если на мобильных было открыто модальное окно
//    const anyModalOpen = (feedbackModal && feedbackModal.style.display === 'flex') ||
//      (callModal && callModal.style.display === 'flex') ||
//      (sidebar && (sidebar.style.display === 'flex' || sidebar.classList.contains('sidebar-container--opened')));

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
//    burgerButton.addEventListener('click', toggleSidebar);
//  }

//  // Кнопки закрытия (включая бургер, который может быть кнопкой закрытия в sidebar)
//  const closeButtons = document.querySelectorAll('.round_button--close');
//  closeButtons.forEach(button => {
//    button.addEventListener('click', function () {
//      // Если это кнопка в sidebar, закрываем только sidebar
//      if (this.closest('.sidebar')) {
//        closeSidebar();
//      } else {
//        closeAllModals();
//      }
//    });
//  });

//  // Закрытие при клике вне модального окна
//  document.addEventListener('click', function (event) {
//    if (event.target === feedbackModal) {
//      closeAllModals();
//    }
//    if (event.target === callModal) {
//      closeAllModals();
//    }
//    if (event.target === sidebar && window.innerWidth < 1119) {
//      closeSidebar();
//    }
//  });

//  // Закрытие по клавише Escape
//  document.addEventListener('keydown', function (event) {
//    if (event.key === 'Escape') {
//      closeAllModals();
//      closeSidebar();
//    }
//  });
  

//  // Обработчик изменения размера окна
//  window.addEventListener('resize', handleResize);
//});

//// Делаем функции глобальными для использования из HTML
//window.openFeedbackModal = openFeedbackModal;
//window.openCallModal = openCallModal;
//window.toggleSidebar = toggleSidebar;
//window.closeAllModals = closeAllModals;
//window.closeSidebar = closeSidebar;



    // Модальные окна и элементы
    const feedbackModal = document.querySelector('.feedback_container');
    const callModal = document.querySelector('.call_container');
    const sidebar = document.querySelector('.sidebar_conteiner');
    const body = document.body;

    // Кнопки открытия
    const openFeedbackButtons = document.querySelectorAll('.icon[src="./assets/icon/chat.svg"]');
    const openCallButtons = document.querySelectorAll('.icon[src="./assets/icon/chat.copy.svg"]');
    const openSidebarButtons = document.querySelectorAll('.burger[src="./assets/icon/burger.svg"]');

    // Кнопки закрытия
    const closeButtons = document.querySelectorAll('.close[src="./assets/icon/close.svg"]');

    // Текущее активное модальное окно
    let activeModal = null;

    // Функция открытия модального окна
    function openModal(modal) {
      if (activeModal) {
        closeModal(activeModal);
      }

      modal.classList.add('active');
      body.classList.add('modal-open');
      activeModal = modal;

      // Добавляем обработчик для закрытия по клику вне окна
      setTimeout(() => {
        document.addEventListener('click', handleOutsideClick);
      }, 100);
    }

    // Функция закрытия модального окна
    function closeModal(modal) {
      modal.classList.remove('active');
      body.classList.remove('modal-open');
      activeModal = null;
      document.removeEventListener('click', handleOutsideClick);
    }

    // Закрытие по клику вне модального окна
    function handleOutsideClick(event) {
      if (!activeModal) return;

      let isClickInside = false;

      if (activeModal === feedbackModal || activeModal === callModal) {
        isClickInside = activeModal.contains(event.target);
      } else if (activeModal === sidebar) {
        isClickInside = activeModal.contains(event.target);
      }

      const isCloseButton = event.target.closest('.round_button--close') ||
        event.target.closest('.round_button--close-form');

      if (!isClickInside && !isCloseButton) {
        closeModal(activeModal);
      }
    }

    // Закрытие по Escape
    function handleEscapeKey(event) {
      if (event.key === 'Escape' && activeModal) {
        closeModal(activeModal);
      }
    }

    // Обработчики для открытия модальных окон
    openFeedbackButtons.forEach(button => {
      button.addEventListener('click', () => openModal(feedbackModal));
    });

    openCallButtons.forEach(button => {
      button.addEventListener('click', () => openModal(callModal));
    });

    // Обработчики для sidebar - только на мобильных
    openSidebarButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (window.innerWidth < 1119) {
          openModal(sidebar);
        }
      });
    });

    // Обработчики для закрытия
    closeButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        const modal = event.target.closest('.feedback_container, .call_container, .sidebar_conteiner');
        if (modal) {
          closeModal(modal);
        }
      });
    });

    // Обработчик клавиши Escape
    document.addEventListener('keydown', handleEscapeKey);

    // Обработчик изменения размера окна
    window.addEventListener('resize', () => {
      // Автоматически закрываем sidebar при переходе на desktop
      if (window.innerWidth >= 1119 && activeModal === sidebar) {
        closeModal(sidebar);
      }
    });




  } catch (error) {
    console.error("Error initializing components:", error);
  }
});
