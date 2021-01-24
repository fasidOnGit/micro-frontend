import faker from 'faker';

const mount = (el) => {
  el.innerHTML = `
  <div>You have ${faker.random.number()} items in your cart</div>
`;
}
const el = document.querySelector('#dev-cart');
if (
  process.env.NODE_ENV === 'development' &&
  el
) {
  mount(el);
}

export {mount};
