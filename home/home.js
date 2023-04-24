// slider

const slider = document.querySelector('.slider');
const sliderSlides = document.querySelector('.slider__slides');
const sliderSlidesCount = sliderSlides.querySelectorAll('.slider__slide').length;
const prevButton = document.querySelector('#nav-button--prev');
const nextButton = document.querySelector('#nav-button--next');
let currentSlide = 0;
let slideInterval;
let isAnimating = false;

prevButton.addEventListener('click', slidePrev);
nextButton.addEventListener('click', slideNext);

function slidePrev() {
  if (!isAnimating) {
    isAnimating = true;
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = sliderSlidesCount - 1;
    }
    slideTo(currentSlide);
  }
}

function slideNext() {
  if (!isAnimating) {
    isAnimating = true;
    currentSlide++;
    if (currentSlide >= sliderSlidesCount) {
      currentSlide = 0;
    }
    slideTo(currentSlide);
  }
}

function slideTo(slideIndex) {
  sliderSlides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startSlideInterval() {
  slideInterval = setInterval(() => {
    slideNext();
  }, 5000);
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

startSlideInterval();

sliderSlides.addEventListener('transitionend', () => {
  isAnimating = false;
});

slider.addEventListener('mouseover', () => {
  prevButton.classList.add('visible');
  nextButton.classList.add('visible');
  stopSlideInterval();
});

slider.addEventListener('mouseout', () => {
  prevButton.classList.remove('visible');
  nextButton.classList.remove('visible');
  startSlideInterval();
});

// Обработчик события на вращение колеса мыши
slider.addEventListener('wheel', (event) => {
  event.preventDefault(); // Отменяем прокрутку страницы
  stopSlideInterval(); // Останавливаем автоматическую прокрутку слайдов

  // Определяем направление вращения колеса мыши
  const direction = Math.sign(event.deltaY);

  // Прокручиваем слайды в соответствующем направлении
  if (direction === -1) {
    slideNext();
  } else if (direction === 1) {
    slidePrev();
  }
});

// Включаем автоматическую прокрутку слайдов после окончания прокрутки мышью
slider.addEventListener('wheel', () => {
  startSlideInterval();
});

// content

let content = [
  {
    "name": "Manti",
    "content_subtitle": "Manti, or manti, is a traditional, mainly meat dish of the peoples of Central Asia",
    "image": "https://plovnaya1.com/thumb/2/oDtVCH-LZWjEAbpHLFNOfA/r/d/manty_miks.jpg",
    "price": "150som"
  },
  {
    "name": "Plov",
    "content_subtitle": "Plov is a traditional Kyrgyz and Uzbek dish made with rice, meat, and vegetables.",
    "image": "https://plovnaya1.com/thumb/2/3aPoDVGtjcvv7ykhtg9Tgg/r/d/plov_chajhana.jpg",
    "price": "200som"
  },
  {
    "name": "Lagman",
    "content_subtitle": "Lagman is a traditional Uighur dish consisting of hand-pulled noodles, meat, and vegetables.",
    "image": "https://chef.tm/public/pics/776/776631_0.jpg",
    "price": "180som"
  },
  {
    "name": "Samsa",
    "content_subtitle": "Samsa is triangular pastry filled with savory meat or vegetable filling, often baked.",
    "image": "https://plovnaya1.com/thumb/2/NHswLUR4avq-PxNMSdU58g/r/d/samsa_assorti.jpg",
    "price": "120som"
  },
  {
    "name": "Shashlik",
    "content_subtitle": "Cubes of marinated meat skewered and grilled, often served with vegetables and bread.",
    "image": "https://unobbq.com/image/cache/catalog/image/cache/catalog/recipes/Shashlyk/shashlyk4-960x960.webp",
    "price": "220som"
  },
  {
    "name": "Kebab",
    "content_subtitle": "Skewered and grilled meat with various seasonings, often served with rice, vegetables, and bread.",
    "image": "https://unobbq.com/image/cache/catalog/image/cache/catalog/recipes/rybnyikebab/rybnyi_kebab4-960x960.webp",
    "price": "190som"
  },
  {
    "name": "Shawarma",
    "content_subtitle": "Middle Eastern sandwich with shaved meat, vegetables, and sauce wrapped in pita or flatbread.",
    "image": "https://sun9-14.userapi.com/impg/QCNV9d12kUY-9JsJ5gRQBPoI1vYrtwPuXwTA7g/eyg4wbx6GUk.jpg?size=960x960&quality=96&sign=0c3b31fad1711b3768c312dcf7bbaa9f&c_uniq_tag=ZzIjgCP0NDUnhNUlMTHcRsm6vJRrxXdvX6yGZDGyoik&type=album",
    "price": "140som"
  },
  {
    "name": "Beş barmak",
    "content_subtitle": "Traditional Central Asian dish with boiled meat, noodles, and onion, often served with broth.",
    "image": "https://gdepoest.kz/images/70000001028501658/org/27579607_198102437604710_87425167411642368_n.jpg",
    "price": "160som"
  },
];

// Сохраняем контент в localStorage
function save() {
  localStorage.setItem("content", JSON.stringify(content));
}
// save()
// ее включаешь если хочешь все сбросить


// Получаем элемент, в который будем добавлять контент
const contentWrapper = document.querySelector('.content__wrapper');

// Функция для отображения контента на странице
const showContent = (item) => {
  // Создаем элементы для отображения контента
  const contentBox = document.createElement('div');
  contentBox.classList.add('content__box');
  
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = item.image;
  contentBox.appendChild(img);
  
  const title = document.createElement('h2');
  title.classList.add('content_title');
  title.textContent = item.name;
  contentBox.appendChild(title);
  
  const subtitle = document.createElement('p');
  subtitle.classList.add('content_subtitle');
  subtitle.textContent = item.content_subtitle;
  contentBox.appendChild(subtitle);
  
  const price = document.createElement('p');
  price.classList.add('content__price');
  price.textContent = `Price: ${item.price}`;
  contentBox.appendChild(price);

  const input = document.createElement("input");
  input.classList.add("input");
  input.classList.add("content__input")
  input.placeholder = "Address...";
  contentBox.appendChild(input)

  // Создаем кнопку "Заказать" и добавляем обработчик события на клик
  const orderBtn = document.createElement('button');
  orderBtn.classList.add('btn');
  orderBtn.textContent = 'order';
  contentBox.appendChild(orderBtn);
  
  orderBtn.addEventListener('click', () => {
    const messageBox = document.createElement('div');
    messageBox.classList.add('message__box');
    
    const name = document.createElement('p');
    name.textContent = `Name: ${item.name}`;
    messageBox.appendChild(name);
    
    const subtitle = document.createElement('p');
    subtitle.textContent = `Subtitle: ${item.content_subtitle}`;
    messageBox.appendChild(subtitle);
    
    const image = document.createElement('p');
    image.textContent = `Image: ${item.image}`;
    messageBox.appendChild(image);
    
    const price = document.createElement('p');
    price.textContent = `Price: ${item.price}`;
    messageBox.appendChild(price);
    
    const address = document.createElement('p');
    address.textContent = `Address: ${input.value}`;
    messageBox.appendChild(address);
    
    // Вызываем функцию для отправки сообщения в Telegram
    sendTelegramMessage(messageBox.innerHTML);
  });

  // Добавляем контент на страницу
  if (contentWrapper) {
    contentWrapper.appendChild(contentBox);
  }
};


// Получаем контент из localStorage и отображаем его на странице
function get_and_add_content() {
  const storedContent = JSON.parse(localStorage.getItem('content'));
  if (storedContent) {
    storedContent.forEach(item => {
      showContent(item);
    });
  };
};
get_and_add_content();

// Функция, которая отправляет сообщение через API Telegram
const sendTelegramMessage = (message) => {
  const token = '5842555036:AAGnlHKQK0DucQ7HHCdX4af2QCNymuAFu4I'; // здесь нужно заменить на свой токен бота
  const chat_id = '1202211883'; // здесь нужно заменить на свой chat_id
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  
  // Отправляем POST запрос на сервер Telegram
  fetch(url, {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json'
  },
  body: JSON.stringify({
  chat_id,
  text: message
  })
  })
  .then(response => {
  console.log('Message sent: ', response);
  })
  .catch(error => {
  console.error('Error sending message: ', error);
  });
};

// Add new

const input__image = document.querySelector('.input__image');
const input__title = document.querySelector('.input__title');
const input__subtitle = document.querySelector('.input__subtitle');
const input__price = document.querySelector('.input__price');

const content__btn_ok = document.querySelector('.content__btn_ok');
const content__btn__clear = document.querySelector('.content__btn__clear');

// очищяем при нажатие на кнопку очистить

content__btn__clear.addEventListener('click', () => {
  // console.log(input__image.value);
  input__image.value = "";
  input__title.value = "";
  input__subtitle.value = "";
  input__price.value = "";
});

function none() {
  if (Boolean(input__image.value) === false) {
    input__image.value = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGB6U_PoVi7aAiktuCukBftOVOyoYh93U6A&usqp=CAU'
  }
  if (Boolean(input__title.value) === false) {
    input__title.value = "none"
  }
  if (Boolean(input__subtitle.value) === false) {
    input__subtitle.value = "This void remains bare, utterly bereft of all essence, in a dozen uttered words."
  }
  if (Boolean(input__price.value) === false) {
    input__price.value = 0
  }
}

const addNewDiv = document.createElement('div');
addNewDiv.innerHTML = `
  <div class="content__box content__box_input">
  <h2 class="content_title">Add new</h2>
  <div class="content_text content_text_input">
    <input type="text" class="input input__image" placeholder="URL of image">
    <input type="text" class="input input__title"  id="bodyText" placeholder="title">
    <input type="text" class="input input__subtitle" placeholder="subtitle">
    <input type="number" class="input input__price" placeholder="price">
  </div>
  <div class="content__btn__box content__btn__box_input">
    <button class="btn content__btn_ok">ok</button>
    <button class="btn content__btn__clear">clear</button>
  </div>
  </div>
`;

content__btn_ok.addEventListener("click", () => {
  none()
  let new_content = {
    "name": input__title.value,
    "content_subtitle": input__subtitle.value,
    "image": input__image.value,
    "price": input__price.value,
  };
  let newDiv = addNewDiv.cloneNode(true);
  contentWrapper.appendChild(newDiv);
  content.unshift(new_content);
  get_and_add_content(newDiv, new_content); // Передаем новый элемент и данные нового контента
  save();

  // Очистка значений полей ввода
  input__title.value = "";
  input__subtitle.value = "";
  input__image.value = "";
  input__price.value = "";
});

