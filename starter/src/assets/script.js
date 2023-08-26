/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/
// Create an array to hold product objects
const products = [];

// Create product objects
const product1 = {
  name: "Cherry",
  price: 2.99,
  quantity: 0,
  productId: 1,
  image: "/images/cherry.jpg"
};

const product2 = {
  name: "Orange",
  price: 1.49,
  quantity: 0,
  productId: 2,
  image: "/images/orange.jpg"
};

const product3 = {
  name: "Strawberry",
  price: 3.29,
  quantity: 0,
  productId: 3,
  image: "/images/strawberry.jpg"
};

// Add product objects to the products array
products.push(product1, product2, product3);

// Declare an empty array to hold cart items
const cart = [];

// Function to add a product to the cart
function addProductToCart(productId) {
  const product = products.find(item => item.productId === productId);

  if (product) {
    product.quantity++;
    if (!cart.includes(product)) {
      cart.push(product);
    }
  }
}

// Function to increase product quantity in the cart
function increaseQuantity(productId) {
  const product = products.find(item => item.productId === productId);

  if (product) {
    product.quantity++;
  }
}

// Function to decrease product quantity in the cart
function decreaseQuantity(productId) {
  const product = products.find(item => item.productId === productId);

  if (product) {
    product.quantity--;
    if (product.quantity === 0) {
      const index = cart.indexOf(product);
      if (index !== -1) {
        cart.splice(index, 1);
      }
    }
  }
}

// Function to remove a product from the cart
function removeProductFromCart(productId) {
  const product = products.find(item => item.productId === productId);

  if (product) {
    product.quantity = 0;
    const index = cart.indexOf(product);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  }
}

// Function to calculate the total cost of items in the cart
function cartTotal() {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

// Function to empty the cart
function emptyCart() {
  cart.forEach(product => {
    product.quantity = 0;
  });
  cart.length = 0;
}

// Function to process payment
function pay(amount) {
  // Assuming the amount is the total amount to pay
  // If the amount is greater than the cart total, return the change
  // If the amount is less than the cart total, return the remaining balance
  return amount - cartTotal();
}



module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
