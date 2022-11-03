/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const URL = 'https://platzi-avo.vercel.app/api/avo';
const BASE_URL = 'https://platzi-avo.vercel.app'
const appNode = document.querySelector('#app');


const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style:'currency',
    currency: 'USD',
  }).format(price);

  return newPrice;
};
/* 
  USANDO ASYNC Y AWAIT
  async function fetchData () {
  const response = await fetch(url),
  data = await response.json(),
  allItem = [];
}

 */window.fetch(`${BASE_URL}/api/avo`)
  .then(response => response.json())
  .then(responseArray => {
    const allItems = [];
    responseArray.data.forEach(element => {

      //creando elementos que se reciben de la url
      const imagen = document.createElement('img');
      imagen.src = `${BASE_URL}${element.image}`;
      
      const title = document.createElement('h2');
      title.textContent = element.name;
      title.className = 'title-avocado'
      
      const price = document.createElement('div');
      price.textContent = formatPrice(element.price);
      price.className = 'price'

      const container = document.createElement('div');
      container.className = 'card-container';

      container.append(imagen, title, price);
      allItems.push(container);
    });
    appNode.append(...allItems);
});


