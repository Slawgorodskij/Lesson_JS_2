const btn = document.querySelector('.button');
let hamburgerInput = document.querySelectorAll('.input');

btn.addEventListener('click', buttonClick);

function buttonClick(event) {
  btn.classList.add('active');
  let burger = new Hamburger();
  console.log(btn);
  console.log(burger);
  console.log(burger.renderName(event));
  console.log(burger.sumPrice(event));
  console.log(burger.sumCalories(event));
}
