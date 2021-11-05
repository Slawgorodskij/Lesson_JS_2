class CartItem extends Goods {
  constructor(el, img) {
    super(el, img);
    this.quantity = el.quantity;
  }
  render() {
    return `<div class="cart-item" data-id="${this.id_product}">
              <div class="product-bio">
              <div class="product__item_img-cart"> <img src="images/${
                this.id_product
              }.jpg" alt="${this.product_name}"></div>  
              <div class="product-desc">
              <p class="product-title">${this.product_name}</p>
              <p class="product-quantity">Quantity: ${this.quantity}</p>
          <p class="product-single-price">$${this.price} each</p>
          </div>
          </div>
          <div class="right-block">
              <p class="product-price">$${this.quantity * this.price}</p>
              <button class="del-btn" data-id="${
                this.id_product
              }">&times;</button>
          </div>
          </div>`;
  }
}
