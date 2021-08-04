// Показывает текст по клику на заголовок "Кликнете сюда, чтобы узнать меня подробнее"
let counter = 0
document.getElementById('show-more').onclick = function() {
    el = document.getElementById('hidden-text');
    el.classList.add('active-text');
    counter += 1
    if (counter % 2 === 0){
        el.classList.remove('active-text');
    }
}
// Плавная прокрутка до секции "Обо мне"
function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let arrow = document.querySelector('.arrow');
const aboutSection = document.querySelector('.about');

arrow.addEventListener('click', () => {
    scrollTo(aboutSection);
})