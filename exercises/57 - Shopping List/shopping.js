const shoppingForm = document.querySelector('.shopping');
const shoppingList = document.querySelector('.list');

const items = [];

function handleSubmit(e) {
  e.preventDefault();
  const name = e.currentTarget.item.value;
  if (!name) return;
  const item = {
    name,
    id: name + Date.now(),
    complete: false,
  };
  items.push(item);
  e.target.reset();
  shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
  const html = items
    .map(
      (item) => `<li class="shopping-item">
      <input type="checkbox">
      <span class="itemName">${item.name}</span>
      <button arai-label="Remove ${item.name}">&times;</button>
  </li>`
    )
    .join('');
  shoppingList.innerHTML = html;
}

function mirrorToLocalStorage() {
  localStorage.setItem('items', JSON.stringify(items));
}

function restoreFromLocalStorage() {
  const lsItems = JSON.parse(localStorage.getItem('items'));
  if (lsItems) {
    lsItems.forEach((item) => items.push(item));
    shoppingList.dispatchEvent(new CustomEvent('itemsUpdated'));
  }
}

shoppingForm.addEventListener('submit', handleSubmit);
shoppingList.addEventListener('itemsUpdated', displayItems);
shoppingList.addEventListener('itemsUpdated', mirrorToLocalStorage);
restoreFromLocalStorage();
