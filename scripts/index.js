// находим элемент body
const bodyElement = document.querySelector('.page');
// находим контейнер с меню
const menuElement = bodyElement.querySelector('.menu');
// находим кнопку меню
const menuButton = bodyElement.querySelector('.button-menu');
// находим кнопку закрытия меню
const menuCloseButton = bodyElement.querySelector('.menu__button-close');
// находим кнопку выбора раздела велосипедов
const bicyclesButton = bodyElement.querySelector('.bicycles__button');
// находим кнопку выбора раздела велосипедов
const bicyclesItemElement = bodyElement.querySelector('.bicycles__item');
// находим список с велосипедами
const bicyclesContainersDesktop = bodyElement.querySelectorAll('.bicycles__list_size_desktop');
const bicyclesContainersMobile = bodyElement.querySelectorAll('.bicycles__list_size_mobile');
// находим список ссылок, по которым меняется список велосипедов
const bicyclesLinks = bodyElement.querySelectorAll('.bicycles__link');
// находим форму
const formElement = bodyElement.querySelector('.form');
// находим поле ввода
const formInput = bodyElement.querySelector('.form__item');
// находим кнопку отправки формы
const formButton = bodyElement.querySelector('.form__button');
// находим кнопки свитчера
const lightSwitcherFooterButton = bodyElement.querySelector('#light');
const darkSwitcherFooterButton = bodyElement.querySelector('#dark');
const lightSwitcherHeaderButton = bodyElement.querySelector('#light-header');
const darkSwitcherHeaderButton = bodyElement.querySelector('#dark-header');
// находим нужные нам элементы страницы
const discriptionElements = bodyElement.querySelectorAll('.discription');
const footerElement = bodyElement.querySelector('.footer');
const introductionCaptionElement = bodyElement.querySelector('.introduction__caption');
const merksQuoteAuthorSublineElement = bodyElement.querySelector('.merks__quote-author-subline');
const swiperPrevButton = bodyElement.querySelector('.swiper__button-prev');
const swiperNextButton = bodyElement.querySelector('.swiper__button-next');
const themeSwitcherLightElements = bodyElement.querySelectorAll('.theme-switcher__light');
const themeSwitcherElements = bodyElement.querySelectorAll('.theme-switcher__container');
const themeSwitcherDarkElements = bodyElement.querySelectorAll('.theme-switcher__dark');
const footerAuthorElement = bodyElement.querySelector('.footer__author');
const closeMenuButton = bodyElement.querySelector('.menu__button-close');

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 400,
      framesCount = 20;

const swiperCoating = new Swiper('.swiper_place_coating', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
});

const swiperBicycles = new Swiper('.swiper_place_bicycles', {
  // // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
      renderBullet: function(index, className) {
        return '\
          <div class="box ' + className + '">\
          </div>';
      },
  },
});

// готовый массив с велосипедами шоссе
const initialBicyclesRoad = [
  {
    name: 'Cervelo Caledonia-5',
    src: './images/bicycles-сervelo-caledonia-5.png',
    link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN'
  },
  {
    name: 'Cannondale Systemsix Himod',
    src: './images/bicycles-сannondale-systemsix-himod.png',
    link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J'
  },
  {
    name: 'Trek Domane SL-7',
    src: './images/bicycles-trek-domane-sl-7.png',
    link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF'
  }
];
// готовый массив с велосипедами грэвел
const initialBicyclesGravel = [
  {
    name: 'Cervelo Aspero GRX 810',
    src: './images/bicycle-cervelo-aspero-grx-810.png',
    link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE'
  },
  {
    name: 'Specialized S-Works Diverge',
    src: './images/bicycle-specialized-s-works-diverge.png',
    link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9'
  },
  {
    name: 'Cannondale Topstone Lefty 3',
    src: './images/bicycle-cannondale-topstone-lefty-3.png',
    link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
  }
];
// готовый массив с велосипедами ТТ
const initialBicyclesTriathlon = [
  {
    name: 'Specialized S-Works Shiv',
    src: './images/bicycle-specialized-s-works-shiv.png',
    link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 '
  },
  {
    name: 'BMC Timemachine 01 ONE',
    src: './images/bicycle-bmc-timemachine-01-one.png',
    link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
  },
  {
    name: 'Cervelo P-Series',
    src: './images/bicycle-cervelo-p-series.png',
    link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
  }
];

// функция открытия меню
function openMenu() {
  menuElement.classList.add('menu_opened');
}

// функция закрытия меню
function closeMenu() {
  menuElement.classList.remove('menu_opened');
}

// функция добавления велосипедов
function addBicycles(name, src, link) {
  // выбираем template и сохраняем в переменную
  const cardTemplate = bodyElement.querySelector('#bicycles-template').content;
  // клонируем содержимое шаблона
  const cardElement = cardTemplate.querySelector('.bicycles__list-item').cloneNode(true);
  // добавляем элементу картинку и к ней атрибут alt
  cardElement.querySelector('.bicycles__image').src = src;
  cardElement.querySelector('.bicycles__image').alt = name;
  // добавляем название
  cardElement.querySelector('.bicycles__caption').textContent = name;
  // добавляем ссылку на элемент
  cardElement.querySelector('.bicycles__link-item').href = link;
  return cardElement;
}

// функция очищения контейнера с велосипедами
function deleteBicycles() {
  // находим элементы с велосипедами
  const bicyclesItem = bodyElement.querySelectorAll('.bicycles__list-item');
  bicyclesItem.forEach((item) => {
    // удалим элемент
    item.remove();
  });
}

// функция заполнения контейнера с велосипедами
function searchArray(array) {
  array.forEach((item) => {
    // вызываем функцию addBicycles
    const bicyclesItem = addBicycles(item.name, item.src, item.link);
    // добавим элемент в конец контейнера со списком
    // bicyclesContainers[0].append(bicyclesItem);
    // bicyclesContainers[1].append(bicyclesItem);
    
    if (window.innerWidth <= 740) {
      
      bicyclesContainersMobile[0].append(bicyclesItem);
    } else {
      bicyclesContainersDesktop[0].append(bicyclesItem);
    };
  });
}

// функция обнуления ссылок
function inactiveLink(link) {
  bicyclesLinks.forEach((element) => {
    if (element.classList.contains('bicycles__link_active')) {
      element.classList.remove('bicycles__link_active')
    }
  });
}

// функция активации ссылки
function actionLink(link) {
  link.classList.add('bicycles__link_active');
}

// функция обработчика нажатия на ссылку
function linkHandler(link) {
  link.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    // обнуляем все ссылки
    inactiveLink(eventTarget);
    // активируем нужную ссылку
    actionLink(eventTarget);
    deleteBicycles();
    if ((eventTarget.textContent) === 'Шоссе') {
      searchArray(initialBicyclesRoad);
    } else if ((eventTarget.textContent) === 'Грэвел') {
      searchArray(initialBicyclesGravel);
    } else if ((eventTarget.textContent) === 'TT') {
      searchArray(initialBicyclesTriathlon);
    };
  });
}

// функция активации кнопки отправки формы
function activeButton() {
  formButton.classList.add('form__button_active');
}

// функция скрытия кнопки отправки
function deActiveButton() {
  formButton.classList.remove('form__button_active');
}

// функция обработчик клика на свитчер темной темы
function switchThemeDark() {
  bodyElement.classList.remove('page_theme_light');
  discriptionElements.forEach((element) => {
    element.classList.remove('discription_theme_light');
  });
  footerElement.classList.remove('footer_theme_light');
  introductionCaptionElement.classList.remove('introduction__caption_theme_light');
  merksQuoteAuthorSublineElement.classList.remove('merks__quote-author-subline_theme_light');
  swiperPrevButton.classList.remove('swiper__button-prev_theme_light');
  swiperNextButton.classList.remove('swiper__button-next_theme_light');
  themeSwitcherLightElements.forEach((element) => {
    element.classList.remove('theme-switcher__light_theme_light');
  });
  themeSwitcherElements.forEach((element) => {
    element.classList.remove('theme-switcher__container_theme_light');
  });
  themeSwitcherDarkElements.forEach((element) => {
    element.classList.remove('theme-switcher__dark_theme_light');
  });
  formInput.classList.remove('form__item_theme_light');
  formButton.classList.remove('form__button_theme_light');
  footerAuthorElement.classList.remove('footer__author_theme_light');
  closeMenuButton.classList.remove('menu__button-close_theme_light');
  
  bodyElement.classList.add('page_theme_dark');
  discriptionElements.forEach((element) => {
    element.classList.add('discription_theme_dark');
  });
  footerElement.classList.add('footer_theme_dark');
  introductionCaptionElement.classList.add('introduction__caption_theme_dark');
  merksQuoteAuthorSublineElement.classList.add('merks__quote-author-subline_theme_dark');
  swiperPrevButton.classList.add('swiper__button-prev_theme_dark');
  swiperNextButton.classList.add('swiper__button-next_theme_dark');
  themeSwitcherLightElements.forEach((element) => {
    element.classList.add('theme-switcher__light_theme_dark');
  });
  themeSwitcherElements.forEach((element) => {
    element.classList.add('theme-switcher__container_theme_dark');
  });
  themeSwitcherDarkElements.forEach((element) => {
    element.classList.add('theme-switcher__dark_theme_dark');
  });
  formInput.classList.add('form__item_theme_dark');
  formButton.classList.add('form__button_theme_dark');
  footerAuthorElement.classList.add('footer__author_theme_dark');
  closeMenuButton.classList.add('menu__button-close_theme_dark');
}

// функция обработчик клика на свитчер светлой темы
function switchThemeLight() {
  bodyElement.classList.remove('page_theme_dark');
  discriptionElements.forEach((element) => {
    element.classList.remove('discription_theme_dark');
  });
  footerElement.classList.remove('footer_theme_dark');
  introductionCaptionElement.classList.remove('introduction__caption_theme_dark');
  merksQuoteAuthorSublineElement.classList.remove('merks__quote-author-subline_theme_dark');
  swiperPrevButton.classList.remove('swiper__button-prev_theme_dark');
  swiperNextButton.classList.remove('swiper__button-next_theme_dark');
  themeSwitcherLightElements.forEach((element) => {
    element.classList.remove('theme-switcher__light_theme_dark');
  });
  themeSwitcherElements.forEach((element) => {
    element.classList.remove('theme-switcher__container_theme_dark');
  });
  themeSwitcherDarkElements.forEach((element) => {
    element.classList.remove('theme-switcher__dark_theme_dark');
  });
  formInput.classList.remove('form__item_theme_dark');
  formButton.classList.remove('form__button_theme_dark');
  footerAuthorElement.classList.remove('footer__author_theme_dark');
  closeMenuButton.classList.remove('menu__button-close_theme_dark');
  
  bodyElement.classList.add('page_theme_light');
  discriptionElements.forEach((element) => {
    element.classList.add('discription_theme_light');
  });
  footerElement.classList.add('footer_theme_light');
  introductionCaptionElement.classList.add('introduction__caption_theme_light');
  merksQuoteAuthorSublineElement.classList.add('merks__quote-author-subline_theme_light');
  swiperPrevButton.classList.add('swiper__button-prev_theme_light');
  swiperNextButton.classList.add('swiper__button-next_theme_light');
  themeSwitcherLightElements.forEach((element) => {
    element.classList.add('theme-switcher__light_theme_light');
  });
  themeSwitcherElements.forEach((element) => {
    element.classList.add('theme-switcher__container_theme_light');
  });
  themeSwitcherDarkElements.forEach((element) => {
    element.classList.add('theme-switcher__dark_theme_light');
  });
  formInput.classList.add('form__item_theme_light');
  formButton.classList.add('form__button_theme_light');
  footerAuthorElement.classList.add('footer__author_theme_light');
  closeMenuButton.classList.add('menu__button-close_theme_light');
}

// обработчик отправки формы
function formSubmitHandler (evt) {
  evt.preventDefault();
  evt.target.reset();
  // вставим новое значение в инпут
  formInput.placeholder = 'Круто!';
  // скрываем кнопку отправки
  deActiveButton();
}

// функция открытия списка по велосипедам
function openItem() {
  bicyclesItemElement.classList.toggle('bicycles__item_closed');
}

// функция закрытия списка по велосипедам
function closeItem() {
  bicyclesItemElement.classList.add('bicycles__item_closed');
}

// обработчик клика по кнопке меню
menuButton.addEventListener('click', () => {
  openMenu();
});

// обработчик клика по кнопке закрытия меню
menuCloseButton.addEventListener('click', () => {
  closeMenu();
});



// функция замены ссылки в кнопке
function changeLink(link) {
  bicyclesButton.textContent = link.textContent;
}


// функция обработчика нажатия на ссылку mobile
function linkMobileHandler(link) {
  link.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    // обнуляем все ссылки
    inactiveLink(eventTarget);
    // активируем нужную ссылку
    actionLink(eventTarget);
    changeLink(eventTarget);
  });
}





// обработчик клика по кнопке выбора велосипедов mobile
bicyclesButton.addEventListener('click', () => {
  openItem();
  const bicyclesLinkEelements = bicyclesItemElement.querySelectorAll('.bicycles__link');
  console.log(bicyclesLinkEelements);
  bicyclesLinkEelements.forEach((el) => {
    linkMobileHandler(el);
  });
});







searchArray(initialBicyclesRoad);

// добавляем обработчик клика по ссылкам
bicyclesLinks.forEach((element) => {
  linkHandler(element);
});

// добавляем обработчик клика на форму
formInput.addEventListener('click', () => {
  activeButton();
});

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

darkSwitcherFooterButton.addEventListener('click', () => {
  switchThemeDark();
});
darkSwitcherHeaderButton.addEventListener('click', () => {
  switchThemeDark();
});
lightSwitcherFooterButton.addEventListener('click', () => {
  switchThemeLight();
});
lightSwitcherHeaderButton.addEventListener('click', () => {
  switchThemeLight();
});





anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});