const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button-next',
    prevEl: '.swiper__button-prev',
  },
});




// находим элемент body
const bodyElement = document.querySelector('.page');
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
// находим список с велосипедами
const bicyclesContainer = bodyElement.querySelector('.bicycles__list');

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
    // вызываем функцию addCard
    const bicyclesItem = addBicycles(item.name, item.src, item.link);
    // добавим элемент в конец контейнера со списком
    bicyclesContainer.append(bicyclesItem);
  });
}

// находим список ссылок, по которым меняется список велосипедов
const bicyclesLinks = bodyElement.querySelectorAll('.bicycles__link');

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

searchArray(initialBicyclesRoad);

// добавляем обработчик клика по ссылкам
bicyclesLinks.forEach((element) => {
  linkHandler(element);
  
});



// находим форму
const formElement = bodyElement.querySelector('.form');
// находим поле ввода
const formInput = bodyElement.querySelector('.form__item');
// находим кнопку отправки формы
const formButton = bodyElement.querySelector('.form__button');

// функция активации кнопки отправки формы
function activeButton() {
  formButton.classList.add('form__button_active');
}

// функция скрытия кнопки отправки
function deActiveButton() {
  formButton.classList.remove('form__button_active');
}

// обработчик отправки формы
function formSubmitHandler (evt) {
  evt.preventDefault();
  console.log(formInput.placeholder);
  evt.target.reset();
  // вставим новое значение в инпут
  formInput.placeholder = 'Круто!';
  console.log(formInput.placeholder);
  // скрываем кнопку отправки
  deActiveButton();

}

// добавляем обработчик клика на форму
formInput.addEventListener('click', () => {
  activeButton();
});

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);