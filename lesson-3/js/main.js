const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const list2 = {
  ProductsList: ProductItem,
  Cart: CartItem,
};

let cart = new Cart();
let products = new ProductsList(cart);
