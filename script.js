var item = document.querySelector('.grocery-list-form--item');
var quantity = document.querySelector('.grocery-list-form--quantity');
var submitBtn = document.querySelector('.grocery-list-form--submit');
var groceryList = document.querySelector('.grocery-list');

submitBtn.addEventListener('click', newListItem);
item.addEventListener('keyup', checkInputs);
quantity.addEventListener('keyup', checkInputs);
groceryList.addEventListener('click', removeItem);

checkInputs();

function newListItem() {
  event.preventDefault();
  var newListItem = document.createElement('li');
  newListItem.innerHTML = `Item: ${item.value} Quantity ${quantity.value} <button class="remove-item">Remove Item</button>`;
  groceryList.append(newListItem);
  clearInputs();
  checkInputs();
}

function checkInputs() {
  if (item.value === '' || quantity.value === '') {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}

function clearInputs() {
  item.value = '';
  quantity.value = '';
}

function removeItem(event) {
  if (event.target.classList.contains('remove-item')) {
    event.target.parentNode.remove();
  }
}








































// var groceryItem = document.querySelector('.grocery-list-form--item');
// var groceryQuantity = document.querySelector('.grocery-list-form--quantity');
// var submitButton = document.querySelector('.grocery-list-form--submit');
// var newList = document.querySelector('.grocery-list');

// submitButton.addEventListener('click', createList);
// groceryItem.addEventListener('keyup', checkInputs);
// groceryQuantity.addEventListener('keyup', checkInputs);

// checkInputs();

// function createList(event) {
//   event.preventDefault();
//   var newListItem = document.createElement('li');
//   console.log(newListItem);
//   newListItem.innerText = `Quantity: ${groceryItem.value} Item: ${groceryQuantity.value}`;
//   newList.append(newListItem);
//   clearInputs();
//   checkInputs();
// }

// function clearInputs() {
//   groceryItem.value = '';
//   groceryQuantity.value = '';
// }

// function checkInputs(event) {
//   if (groceryItem.value === '' || groceryQuantity.value === '') {
//     submitButton.disabled = true;
//   } else {
//     submitButton.disabled = false;
//   }
// }
