const groceryList = document.getElementById("groceryList");
const addButton = document.getElementById("addButton");
const input = document.getElementById("item");

const groceryItems = [
  { name: "milk", bought: true },
  { name: "bread", bought: false },
  { name: "eggs", bought: true },
  { name: "apples", bought: false },
];

function displayGroceryItems() {
  groceryList.innerHTML = "";

  for (let i = 0; i < groceryItems.length; i++) {
    const item = document.createElement("li");
    item.textContent = groceryItems[i].name;

    const close = document.createElement("span");
    close.textContent = "\u00D7";
    close.classList.add("close");
    item.appendChild(close);

    if (groceryItems[i].bought) {
      item.classList.add("checked");
    }

    groceryList.appendChild(item);
  }
}

function addItem() {
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter a grocery item.");
    return;
  }

  groceryItems.push({ name: value, bought: false });
  input.value = "";
  displayGroceryItems();
}

function removeItem(item) {
  const index = Array.from(groceryList.children).indexOf(item);
  groceryItems.splice(index, 1);
  item.style.display = "none";
}

groceryList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }

  if (event.target.classList.contains("close")) {
    removeItem(event.target.parentNode);
  }
});

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addButton.click();
  }
});

displayGroceryItems();
