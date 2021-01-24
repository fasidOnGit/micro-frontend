import {mount as mountProduct} from 'products/ProductsIndex';
import {mount as mountCart} from 'cart/CartShow';

console.log('container');

mountProduct(document.querySelector('#devProducts'));
mountCart(document.querySelector('#dev-cart'));
