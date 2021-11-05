class ProductsList extends List {
    constructor(cart, container = '.products', url = '/catalogData.json') {
      super(url, container);
      this.cart = cart;
      this.getJson().then((data) => this.handleData(data)); 
    }
    _init() {
      document.querySelector(this.container).addEventListener('click', (e) => {
        if (e.target.classList.contains('buy-btn')) {
          this.cart.addProduct(e.target);
        }
      });
    }
  }