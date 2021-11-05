class Cart extends List {
  constructor(container = '.cart-block', url = '/getBasket.json') {
    super(url, container);
    this.getJson().then((data) => {
      this.handleData(data.contents);
    });
  }
  addProduct(element) {
    let productId = +element.dataset['id'];
    let find = this.allProducts.find(
      (product) => product.id_product === productId
    );
    if (find) {
      find.quantity++;
      this._updateCart(find);
    } else {
      let product = {
        id_product: productId,
        price: +element.dataset['price'],
        product_name: element.dataset['name'],
        quantity: 1,
      };
      this.goods = [product];
      this.render();
    }
  }
  removeProduct(element) {
    let productId = +element.dataset['id'];
    let find = this.allProducts.find(
      (product) => product.id_product === productId
    );
    if (find.quantity > 1) {
      find.quantity--;
      this._updateCart(find);
    } else {
      this.allProducts.splice(this.allProducts.indexOf(find), 1);
      document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
    }
  }
  _updateCart(product) {
    let block = document.querySelector(
      `.cart-item[data-id="${product.id_product}"]`
    );
    block.querySelector(
      '.product-quantity'
    ).textContent = `Quantity: ${product.quantity}`;
    block.querySelector('.product-price').textContent = `$${
      product.quantity * product.price
    }`;
  }
  _init() {
    const btnCart = document.querySelector('.btn-cart');
    const container = document.querySelector(this.container);
    btnCart.addEventListener('click', () => {
      container.classList.toggle('invisible');
    });
    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('del-btn')) {
        this.removeProduct(e.target);
      }
    });
  }
}
