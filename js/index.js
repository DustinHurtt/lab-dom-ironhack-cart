

let cartElement = document.querySelector("#cart tbody")

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  let sub = price.innerHTML * quantity.value;

  subtotal.innerHTML = sub;

  return sub
}

function calculateAll() {


  let allPrices = document.querySelectorAll('.product');



  let fullTotal = 0;


  for (let i = 0; i < allPrices.length; i++) {
    fullTotal += updateSubtotal(allPrices[i]); 
  }

  let totalNumSpan = document.querySelector("#total-value span");

  totalNumSpan.innerHTML = fullTotal;
  

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  let toRemove = event.currentTarget.parentNode.parentNode;

  toRemove.remove(target);

  calculateAll();

  console.log('The target in remove is:', target);
}




// ITERATION 5

function createProduct() {

  let newProduct = document.querySelector('.create-product input[type=text]');
  let newPrice = document.querySelector('.create-product input[type=number]');


  let newer = document.createElement("tr")
  newer.setAttribute('class', 'product')
  newer.innerHTML = `<tr class="product">
    <td class="name">
    <span>${newProduct.value}</span>
    </td>
    <td class="price">$<span>${newPrice.value}</span></td>
    <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
    <button class="btn btn-remove">Remove</button>
    </td>
    </tr>`;

cartElement.appendChild(newer); 

let newRemoveButton = newer.querySelector('.btn-remove');
newRemoveButton.addEventListener('click', removeProduct);

newProduct.value = "";
newPrice.value = 0;
} 


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  document.querySelectorAll('.btn-remove').forEach(item => {
    item.addEventListener('click', event => { removeProduct(event, item)
    })
  })

  const createButton = document.getElementById('create');
    if(createButton) {
      createButton.addEventListener('click', createProduct)
    }


});
