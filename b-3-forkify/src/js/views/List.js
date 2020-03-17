/**
 * ListView
 */

export default (components, elements, namesInDOM) => new class ListView {
  constructor() {}

  renderItem = item => {
    console.log(item);
    elements.shoppingList.main.insertAdjacentHTML('beforeend', components.shoppingListItem(item));
  }

  deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);

    if (item) {
      item.parentElement.removeChild(item);
    }
  }
};
