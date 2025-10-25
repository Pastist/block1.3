
//import '../assets/scss/swiper-bundle.min.css';
import '../assets/scss/style.scss';
//import '../index.html';



document.addEventListener("DOMContentLoaded", () => {
  try {


    let swipers = {};
  
    function isMobileView() {
      return window.innerWidth <= 768;
    }
  
    function initSwipers() {
      if (!isMobileView()) return;
      
      console.log('Initializing Swipers for mobile');
      
      const config = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        pagination: { 
          el: ".swiper-pagination", 
          clickable: true 
        }
      };

      ['cap_services', 'repair_container', 'prices_container'].forEach(selector => {
        const element = document.querySelector('.' + selector);
        if (element && !swipers[selector]) {
          try {
            swipers[selector] = new Swiper('.' + selector, config);
            console.log(`Swiper initialized for ${selector}`);
          } catch (error) {
            console.error(`Error initializing Swiper for ${selector}:`, error);
          }
        }
      });
    }

    function destroySwipers() {
      console.log('Destroying Swipers for desktop');
      
      Object.keys(swipers).forEach(selector => {
        if (swipers[selector] && typeof swipers[selector].destroy === 'function') {
          try {
            swipers[selector].destroy(true, true);
            console.log(`Swiper destroyed for ${selector}`);
          } catch (error) {
            console.error(`Error destroying Swiper for ${selector}:`, error);
          }
        }
      });
      
      swipers = {};
    }
    
    function manageSwipers() {
      const shouldBeMobile = isMobileView();
      
      if (shouldBeMobile) {
        initSwipers();
      } else {
        destroySwipers();
      }
    }

    manageSwipers();
    console.log('Initial Swiper state:', isMobileView() ? 'mobile' : 'desktop');

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(manageSwipers, 100);
    });





    

const toggleButton = document.getElementById("iconButton");
const toggleText = toggleButton.querySelector(".open_icon_text");
const mainImg = document.querySelector(".open_img");
const slideToggle = document.querySelectorAll(".brands_services");
let isExpanded = false;

// Функция для применения закрытого состояния
function applyClosedState() {
  slideToggle.forEach((item, index) => {
    if (window.innerWidth >= 1010) {
      if (index >= 8) item.classList.add("hidden");
    } else if (window.innerWidth >= 766) {
      if (index >= 6) item.classList.add("hidden");
    }
     else {
      // Для мобильных устройств (меньше 766px)
      if (index >= 12
      ) item.classList.add("hidden");
    }
  });
  toggleText.textContent = "Показать всё";
  mainImg.classList.remove("rotated");
}

// Функция для применения открытого состояния
function applyOpenState() {
  slideToggle.forEach(item => item.classList.remove("hidden"));
  toggleText.textContent = "Скрыть";
  mainImg.classList.add("rotated");
}

// Инициализация при загрузке - устанавливаем закрытое состояние
applyClosedState();

// Обработчик клика
toggleButton.addEventListener("click", () => {
  if (isExpanded) {
    applyClosedState();
  } else {
    applyOpenState();
  }
  isExpanded = !isExpanded;
});

// Обработчик изменения размера окна
window.addEventListener("resize", () => {
  if (!isExpanded) {
    // Если состояние закрытое, обновляем скрытие элементов
    applyClosedState();
  }
});



// Функция для закрытия всех модальных окон
function closeAllModals() {
  const feedbackModal = document.querySelector('.feedback_container');
  const callModal = document.querySelector('.call_container');
  const sidebarModal = document.querySelector('.sidebar_container');

  if (feedbackModal) feedbackModal.classList.remove('feedback_container--opened');
  if (callModal) callModal.classList.remove('call_container--opened');
  if (sidebarModal) sidebarModal.classList.remove('sidebar_container--opened');
  
  document.removeEventListener('click', closeModalOnOutsideClick);
}

// Функция для открытия модального окна
function openModal(modal) {
  if (!modal) return;

  // Сначала закрываем все модальные окна
  closeAllModals();

  // Затем открываем нужное
  if (modal.classList.contains('feedback_container')) {
    modal.classList.add('feedback_container--opened');
  } else if (modal.classList.contains('call_container')) {
    modal.classList.add('call_container--opened');
  } else if (modal.classList.contains('sidebar_container')) {
    modal.classList.add('sidebar_container--opened');
  }

  // Добавляем обработчик для закрытия при клике вне окна
  setTimeout(() => {
    document.addEventListener('click', closeModalOnOutsideClick);
  }, 0);
}

// Функция для закрытия при клике вне модального окна
function closeModalOnOutsideClick(event) {
  const feedbackModal = document.querySelector('.feedback_container');
  const callModal = document.querySelector('.call_container');
  const sidebarModal = document.querySelector('.sidebar_container');

  const isFeedbackOpen = feedbackModal && feedbackModal.classList.contains('feedback_container--opened');
  const isCallOpen = callModal && callModal.classList.contains('call_container--opened');
  const isSidebarOpen = sidebarModal && sidebarModal.classList.contains('sidebar_container--opened');

  // Если нет открытых модальных окон, удаляем обработчик
  if (!isFeedbackOpen && !isCallOpen && !isSidebarOpen) {
    document.removeEventListener('click', closeModalOnOutsideClick);
    return;
  }

  // Проверяем, был ли клик вне модального окна
  const isClickInsideFeedback = feedbackModal && feedbackModal.contains(event.target);
  const isClickInsideCall = callModal && callModal.contains(event.target);
  const isClickInsideSidebar = sidebarModal && sidebarModal.contains(event.target);

  // Проверяем, был ли клик по любой кнопке открытия
  const isClickOnOpenButton = event.target.closest('.button--opened-chat') ||
    event.target.closest('.button--opened-call') ||
    event.target.closest('.burger');

  // Если клик был не внутри модального окна и не по кнопке открытия, то закрываем все
  if (!isClickInsideFeedback && !isClickInsideCall && !isClickInsideSidebar && !isClickOnOpenButton) {
    closeAllModals();
  }
}

// Закрытие по кнопке Escape
function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeAllModals();
  }
}

// Делегирование событий для всех кнопок (работает для динамически добавленных элементов)
document.addEventListener('click', function (e) {
  // Обработка кликов по кнопкам открытия чата
  const chatButton = e.target.closest('.button--opened-chat');
  if (chatButton) {
    e.preventDefault();
    e.stopPropagation();
    openModal(document.querySelector('.feedback_container'));
  }

  // Обработка кликов по кнопкам открытия звонка
  const callButton = e.target.closest('.button--opened-call');
  if (callButton) {
    e.preventDefault();
    e.stopPropagation();
    openModal(document.querySelector('.call_container'));
  }

  // Обработка кликов по кнопке бургер
  const burgerButton = e.target.closest('.burger');
  if (burgerButton) {
    e.preventDefault();
    e.stopPropagation();
    // Открываем сайдбар только на маленьких экранах
    if (window.innerWidth < 1119) {
      openModal(document.querySelector('.sidebar_container'));
    }
  }

  // Обработка кликов по кнопкам закрытия
  const closeButton = e.target.closest('.round_button--close-form');
  if (closeButton) {
    e.stopPropagation();
    closeAllModals();
  }
  
  // Обработка кликов по кнопке закрытия сайдбара
  const sidebarCloseButton = e.target.closest('.close_menu');
  if (sidebarCloseButton) {
    e.stopPropagation();
    closeAllModals();
  }
});

// Инициализируем при загрузке
document.addEventListener('DOMContentLoaded', function () {
  // Обработчики отправки форм
  const feedbackForm = document.querySelector('.feedback_form');
  const callForm = document.querySelector('.call_form');

  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Форма обратной связи отправлена');
      closeAllModals();
    });
  }

  if (callForm) {
    callForm.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log('Форма звонка отправлена');
      closeAllModals();
    });
  }

  // Валидация номера телефона (только цифры)
  const phoneInput = document.querySelector('.call_form__phone-input');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      this.value = this.value.replace(/[^\d]/g, '');
    });
  }

  // Добавляем обработчик Escape
  document.addEventListener('keydown', handleEscapeKey);

  // Предотвращаем закрытие при клике внутри модального окна
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  // Инициализация сайдбара на больших экранах
  function initSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth >= 1119) {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  }
  
  initSidebar();
  
  // Обработчик изменения размера окна для сайдбара
  window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarContainer = document.querySelector('.sidebar_container');
    
    if (window.innerWidth >= 1119) {
      // На больших экранах сайдбар всегда виден
      sidebar.style.display = 'block';
      // Закрываем сайдбар если он открыт как модальное окно
      if (sidebarContainer.classList.contains('sidebar_container--opened')) {
        closeAllModals();
      }
    } else {
      // На маленьких экранах скрываем сайдбар если он не открыт
      if (!sidebarContainer.classList.contains('sidebar_container--opened')) {
        sidebar.style.display = 'none';
      }
    }
  });

  console.log('Модальные окна инициализированы');
  console.log('Найдено кнопок чата:', document.querySelectorAll('.button--opened-chat').length);
  console.log('Найдено кнопок звонка:', document.querySelectorAll('.button--opened-call').length);
  console.log('Найдено кнопок бургер:', document.querySelectorAll('.burger').length);
});




    
//// Функция для закрытия всех модальных окон
//function closeAllModals() {
//    const feedbackModal = document.querySelector('.feedback_container');
//    const callModal = document.querySelector('.call_container');
    
//    feedbackModal.classList.remove('feedback_container--opened');
//    callModal.classList.remove('call_container--opened');
//    document.removeEventListener('click', closeModalOnOutsideClick);
//}

//// Функция для открытия модального окна
//function openModal(modal) {
//    // Сначала закрываем все модальные окна
//    closeAllModals();
    
//    // Затем открываем нужное
//    if (modal.classList.contains('feedback_container')) {
//        modal.classList.add('feedback_container--opened');
//    } else if (modal.classList.contains('call_container')) {
//        modal.classList.add('call_container--opened');
//    }
    
//    // Добавляем обработчик для закрытия при клике вне окна
//    setTimeout(() => {
//        document.addEventListener('click', closeModalOnOutsideClick);
//    }, 0);
//}

//// Функция для закрытия при клике вне модального окна
//function closeModalOnOutsideClick(event) {
//    const feedbackModal = document.querySelector('.feedback_container');
//    const callModal = document.querySelector('.call_container');
    
//    const isFeedbackOpen = feedbackModal.classList.contains('feedback_container--opened');
//    const isCallOpen = callModal.classList.contains('call_container--opened');
    
//    // Если нет открытых модальных окон, удаляем обработчик
//    if (!isFeedbackOpen && !isCallOpen) {
//        document.removeEventListener('click', closeModalOnOutsideClick);
//        return;
//    }
    
//    // Проверяем, был ли клик вне модального окна
//    const isClickInsideFeedback = feedbackModal.contains(event.target);
//    const isClickInsideCall = callModal.contains(event.target);
//    const isClickOnOpenButton = event.target.closest('.button--opened-chat') || 
//                               event.target.closest('.button--opened-call');
    
//    // Если клик был не внутри модального окна и не по кнопке открытия, то закрываем все
//    if (!isClickInsideFeedback && !isClickInsideCall && !isClickOnOpenButton) {
//        closeAllModals();
//    }
//}

//// Закрытие по кнопке Escape
//function handleEscapeKey(event) {
//    if (event.key === 'Escape') {
//        closeAllModals();
//    }
//}

//// Обработчики для кнопок открытия
//document.querySelector('.button--opened-chat').addEventListener('click', function(e) {
//    e.preventDefault();
//    e.stopPropagation();
//    openModal(document.querySelector('.feedback_container'));
//});

//document.querySelector('.button--opened-call').addEventListener('click', function(e) {
//    e.preventDefault();
//    e.stopPropagation();
//    openModal(document.querySelector('.call_container'));
//});

//// Обработчики для кнопок закрытия
//document.querySelectorAll('.round_button--close-form').forEach(button => {
//    button.addEventListener('click', function(e) {
//        e.stopPropagation();
//        closeAllModals();
//    });
//});

//// Обработчики отправки форм
//document.querySelector('.feedback_form').addEventListener('submit', function(e) {
//    e.preventDefault();
//    // Здесь можно добавить обработку данных формы
//    console.log('Форма обратной связи отправлена');
//    closeAllModals();
//});

//document.querySelector('.call_form').addEventListener('submit', function(e) {
//    e.preventDefault();
//    // Здесь можно добавить обработку данных формы
//    console.log('Форма звонка отправлена');
//    closeAllModals();
//});

//// Валидация номера телефона (только цифры)
//document.querySelector('.call_form__phone-input').addEventListener('input', function(e) {
//    this.value = this.value.replace(/[^\d]/g, '');
//});

//// Добавляем обработчик Escape
//document.addEventListener('keydown', handleEscapeKey);

//// Предотвращаем закрытие при клике внутри модального окна
//document.querySelectorAll('modal').forEach(modal => {
//    modal.addEventListener('click', function(e) {
//        e.stopPropagation();
//    });
//});





  } catch (error) {
    console.error("Error initializing components:", error);
  }
});
