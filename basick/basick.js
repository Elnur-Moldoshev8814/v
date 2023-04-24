// change theme

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const main = document.querySelector('.main');

//Тут создаём переменную которая получает данные из LocalStorage
let THEMES = localStorage.getItem('THEMES')
//после выводим в консоль для меня любимого
console.log(THEMES);
//а это уже условие, кои выглядить так, что
//если Наша Переменная равна 'dark'
//то срабатывает функция change_theme()

if (THEMES == 'dark') {
    change_theme()
}

function change_theme() {
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    main.classList.toggle('dark');

    sun.classList.toggle('dark');
    moon.classList.toggle('dark');
}

moon.addEventListener('click', () => {
    localStorage.setItem("THEMES", "dark");
    THEMES = localStorage.getItem("THEMES");
    console.log(THEMES);

    change_theme()
})

sun.addEventListener('click', () => {
    localStorage.setItem("THEMES", "lite");
    THEMES = localStorage.getItem("THEMES");
    console.log(THEMES);
    change_theme();
})

// scroll efect

let oldScroll  = 0; 

function handleScroll() {
    if (oldScroll > window.scrollY) {
        header.style.transform = "translateY(0px)";
    }else{
        header.style.transform = "translateY(-98px)";
    }

    oldScroll = window.scrollY;
}

window.addEventListener('scroll', handleScroll);

// admin

const content__box_input = document.querySelector(".content__box_input");
const log_out = document.querySelector("#log_out");

let admin_status = localStorage.getItem('admin');

if (admin_status == "true") {
    log_out.style.display = "flex"
  }
  else{
    log_out.style.display = "none"
  }
if (admin_status == "true") {
  content__box_input.style.display = "flex";
}
else{
  content__box_input.style.display = "none";
}

// выход из админки

log_out.addEventListener("click", () => {
    localStorage.setItem("admin", "false");
    alert("you are out of admin mode");
    location.reload();
});