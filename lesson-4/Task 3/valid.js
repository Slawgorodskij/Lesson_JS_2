const Valid = {
  name: {
    pattern: /^[a-zа-яё]+$/i,
    error: 'Имя содержит только буквы',
  },
  phone: {
    pattern: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
    error: 'Телефон имеет вид +7(000)000-0000',
  },
  email: {
    pattern: /^[\w\.-]+@\w+\.[a-z]{2,4}$/i,
    error:
      'E-mail имеет вид: mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru',
  },
};

const input = document.querySelectorAll('input');

function checkValueInput() {
  input.forEach(function (params) {
    const { pattern, error } = Valid[params.name];
    if (!pattern.test(params.value)) {
      params.classList.add('invalid');
      errorMessage(params, error);
    } else {
      params.classList.remove('invalid');
      removeErrorMessage(params);
      console.log(params);
    }
  });
}

function errorMessage(params, error) {
  let errors = `<p class="${params.id} error-msg">${error}</p> `;
  let infoText = document.querySelector(`.${params.id}`);
  if (infoText == null) {
    params.parentNode.insertAdjacentHTML('beforeend', errors);
  }
}

function removeErrorMessage(params) {
  let infoText = document.querySelector(`.${params.id}`);
  infoText.innerText = '';
}

window.onload = () => {
  document.getElementById('feedbackForm').addEventListener('submit', (el) => {
    el.preventDefault();
    checkValueInput();
  });
};
