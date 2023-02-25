let groceryList = document.querySelector("ul");

//  Create an array of grocery items with status "bought"
const groceryItems = [
  { name: "milk", bought: true },
  { name: "bread", bought: false },
  { name: "eggs", bought: true },
  { name: "apples", bought: false },
];

// Create a function to display the grocery items as a list in the DOM and adding bought class to indicate that they have been bought
function displayGroceryItems() {
  for (let i = 0; i < groceryItems.length; i++) {
    const item = document.createElement("li");
    item.textContent = groceryItems[i].name;

    if (groceryItems[i].bought) {
      item.classList.add("bought");
    }

    groceryList.appendChild(item);
  }

  document.body.appendChild(groceryList);
}

displayGroceryItems();
