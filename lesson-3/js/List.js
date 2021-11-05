class List {
  constructor(url, container, list = list2) {
    this.container = container;
    this.list = list;
    this.url = url;
    this.goods = [];
    this.allProducts = [];
    this._init();
  }
  getJson(url) {
    return fetch(url ? url : `${API + this.url}`)
      .then((result) => result.json())
      .catch((error) => {
        console.log(error);
      });
  }
  handleData(data) {
    this.goods = [...data];
    this.render();
  }
  // с "reduce" и правда на много лаконичнее
  calcSum() {
    return this.allProducts.reduce((accum, item) => (accum += item.price), 0);
  }
  //очень понравился предложенный вами вариант
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new this.list[this.constructor.name](product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }
  _init() {
    return false;
  }
}
