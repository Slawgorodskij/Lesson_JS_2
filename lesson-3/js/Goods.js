class Goods {
  constructor(el, img) {
    this.product_name = el.product_name;
    this.price = el.price;
    this.id_product = el.id_product;
    this.img = img;
  }
  /**Вывод товаров каталога */
  render() {
    return `<div class="product__item" data-id="${this.id_product}">
    <div class="product__item_img"> <img src="images/${this.id_product}.jpg" alt="${this.product_name}"></div>
                <div class="desc">
                    <h3>${this.product_name}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn"
                    data-id="${this.id_product}"
                    data-name="${this.product_name}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>`;
  }
}
