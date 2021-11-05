class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this._fetchProducts();
  }

  _fetchProducts() {
    this.goods = [
      { id: 1, title: 'Notebook', price: 2000 },
      { id: 2, title: 'Mouse', price: 20 },
      { id: 3, title: 'Keyboard', price: 200 },
      { id: 4, title: 'Gamepad', price: 50 },
    ];
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }
  goodsList() {
    const block = document.querySelector(this.container);
    let productPrice = 0;
    this.goods.forEach((element) => (productPrice += element.price));
    const totalAmountRenders = `<div class="product__price">
                          Выведено товаров на сумму:  ${productPrice}
                          </div>`;
    block.insertAdjacentHTML('afterend', totalAmountRenders);
  }
}

class ProductItem {
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
  }

  render() {
    return `<div class="product__item" data-id="${this.id}">
            <div class="product__item_img"> <img src="images/${this.title}.jpg" alt="${this.title}"></div>  
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
  }
}

class Basket {
  constructor() {}
  /** Метод добавления товаров */
  addProduct() {}
  /**Метод сортировки товара */
  productSorting() {}
  /** Метод подсчета предоставленной
   * скидки на весь приобретаемый товар */
  discountAmount() {}
  /** Метод подсчета общей суммы выбранной продукции */
  totalAmount() {}
  /** Метод удаления товара из корзины */
  delProduct() {}
  /** Метод вывода "в окно браузера" */
  render() {}
}
class ItemBasket {
  constructor() {}
  /** Метод подсчета предоставленной
   * скидки на выбранный товар */
  discount() {}
  /** Метод вывода "в окно браузера" */
  render() {}
}

let list = new ProductsList();
list.render();
list.goodsList();
