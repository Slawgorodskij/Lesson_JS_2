const cartItem = {
  props: ['cartItem', 'img'],
  template: `
                <div class="cart-item">
                    <div class="product-photo">
                          <img class="product-photo_images" 
                          :src="img" alt="Some img">
                    </div>
                    <div class="product-desc">
                            <p class="product-title">{{cartItem.product_name}}</p>
                            <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                            <p class="product-single-price">$ {{cartItem.price}} каждое</p>
                        </div>
                        <div class="right-block">
                        <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `,
};
const cart = {
  data() {
    return {
      cartUrl: '/getBasket.json',
      cartItems: [],
      showCart: false,
    };
  },
  components: {
    'cart-item': cartItem,
  },
  methods: {
    addProduct(product) {
      let find = this.cartItems.find(
        (el) => el.id_product === product.id_product
      );
      console.log(find);
      if (find) {
        this.$parent
          .putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
          .then((data) => {
            if (data.result === 1) {
              find.quantity++;
            }
          });
      } else {
        let prod = Object.assign({ quantity: 1 }, product);
        this.$parent.postJson(`/api/cart`, prod).then((data) => {
          if (data.result === 1) {
            this.cartItems.push(prod);
          }
        });
      }
    },
    remove(item) {
      if (item.quantity > 1) {
        this.$parent
          .putJson(`/api/cart/${item.id_product}`, { quantity: -1 })
          .then((data) => {
            if (data.result === 1) {
              item.quantity--;
            }
          });
      } else {
        this.$parent.deleteJson(`/api/cart/${item.id_product}`).then((data) => {
          if (data.result === 1) {
            this.cartItems.splice(this.cartItems.indexOf(item), 1);
          }
        });
      }
    },
  },
  mounted() {
    this.$parent.getJson(`/api/cart`).then((data) => {
      for (let item of data.contents) {
        item.imgPath = `images/${item.id_product}.jpg`;
        this.cartItems.push(item);
      }
    });
  },
  template: `
<div>
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item" 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item" 
                :img="item.imgPath"
                @remove="remove">
                </cart-item>
            </div>
</div>`,
};

export default cart;

let obj = new WebSocket('ws://localhost');
