class Hamburger {
  constructor(container = '.final') {
    this.container = container;

    this.product = [
      { id: 'hamburger', name: 'Маленький гамбургер', price: 50, calories: 20 },
      {
        id: 'bighamburger',
        name: 'Большой гамбургер',
        price: 100,
        calories: 40,
      },
      {
        id: 'cheese',
        name: 'Сыр',
        price: 10,
        calories: 20,
      },
      {
        id: 'salad',
        name: 'Салат',
        price: 20,
        calories: 5,
      },
      {
        id: 'potato',
        name: 'Картофель',
        price: 15,
        calories: 10,
      },
      {
        id: 'spice',
        name: 'Специя',
        price: 15,
        calories: 0,
      },
      {
        id: 'mayonnaise',
        name: 'Майонез',
        price: 20,
        calories: 5,
      },
    ];
  }
  /**Свойство получения активных ID */
  createidActive() {
    let idActive = [];
    hamburgerInput.forEach(function (hamburgerInput) {
      if (hamburgerInput.checked) {
        idActive.push(hamburgerInput.id);
      }
    });
    console.log(idActive);
    return idActive;
  }
  /**Получение массива активных продуктов */
  createProductActive() {
    let idActive = this.createidActive();
    let productActive = [];
    for (let i = 0; i < idActive.length; i++) {
      productActive.push(this.product.find((item) => item.id == idActive[i]));
    }
    console.log(productActive);
    return productActive;
  }
  //Здравствуйте. Урок видел. Но еще не придумал как сократить код.
  //Неделя была тяжелой (ф списывать не люблю)

  /**Вывод названий выбраных продуктов */
  renderName() {
    const block = document.querySelector(this.container);
    let productActive = this.createProductActive();
    productActive.forEach(function (productActive) {
      const text = `<p>${productActive.name}</p>`;
      block.insertAdjacentHTML('beforeend', text);
    });
  }
  /**Подсчет и вывод общей стоимости */
  sumPrice() {
    const block = document.querySelector(this.container);
    let productActive = this.createProductActive();
    let productPrice = 0;
    productActive.forEach((element) => (productPrice += element.price));
    const text = `<p>Общая стоимость: ${productPrice} рублей</p>`;
    block.insertAdjacentHTML('beforeend', text);
  }
  /**Подсчет и вывод общей суммы калориев */
  sumCalories() {
    const block = document.querySelector(this.container);
    let productActive = this.createProductActive();
    let productCalories = 0;
    productActive.forEach((element) => (productCalories += element.calories));
    const text = `<p>Общее количество калорий: ${productCalories}</p>`;
    block.insertAdjacentHTML('beforeend', text);
  }
}
