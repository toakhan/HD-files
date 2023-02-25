// Define the Shoes class
class Shoes {
  constructor(name, productCode, quantity, value) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.value = value;
  }
}

// Create 5 instances of the Shoes class
const shoeArray = [
  new Shoes("Sneakers", "001", 10, 50),
  new Shoes("Loafers", "002", 8, 75),
  new Shoes("Boots", "003", 15, 100),
  new Shoes("Sandals", "004", 20, 30),
  new Shoes("Oxfords", "005", 5, 120)
];

// Function to display shoe objects in the result div
function displayShoe(shoe) {
  return `<p><strong>Name:</strong> ${shoe.name}<br>
             <strong>Product Code:</strong> ${shoe.productCode}<br>
             <strong>Quantity:</strong> ${shoe.quantity}<br>
             <strong>Value per item:</strong> ${shoe.value}</p></br>`;
}

class Inventory {
  constructor(shoeArray) {
    this.shoeArray = shoeArray;
  }

  searchShoe(searchValue) {
    const foundShoe = this.shoeArray.find(shoe => shoe.name === searchValue);
    if (foundShoe) {
      console.table(foundShoe);
      return displayShoe(foundShoe);
    } else {
      return "Shoe not found.";
    }
  }

  findLowestValueShoe() {
    const result = this.shoeArray.reduce((prev, current) => {
      return prev.value < current.value ? prev : current;
    });
    console.log("The shoe with the lowest value per item is:");
    console.table(result);

    return displayShoe(result);
  }


  findHighestValueShoe() {
    const result = this.shoeArray.reduce((prev, current) => {
      return prev.value > current.value ? prev : current;
    });
    console.log("The shoe with the highest value per item is:");
    console.table(result);
    return displayShoe(result);
  }

  editShoe(productName, attribute, value) {
    const shoe = this.shoeArray.find(shoe => shoe.name === productName);  
    if (shoe) {
      shoe[attribute] = value;
      console.table(shoe);
      return displayShoe(shoe);
    } else {
      return "Shoe not found.";
    }
  }

  sortShoeArray() {
    const sortedArray = this.shoeArray.sort((a, b) => a.valuePerItem - b.valuePerItem);
    console.log("The sorted array is:");
    console.table(sortedArray);
    return sortedArray.map(shoe => displayShoe(shoe)).join("");
  }
}

const inventory = new Inventory(shoeArray);

document.getElementById("search-button").addEventListener("click", () => {
  const productCode = document.getElementById("product-code").value;
  const searchResult = inventory.searchShoe(productCode);
  document.getElementById("search-result").innerHTML = searchResult;
});

document.getElementById("lowest-value-button").addEventListener("click", () => {
  const lowestValueResult = inventory.findLowestValueShoe();
  document.getElementById("lowest-value-result").innerHTML = lowestValueResult;
});

document.getElementById("highest-value-button").addEventListener("click", () => {
  const highestValueResult = inventory.findHighestValueShoe();
  document.getElementById("highest-value-result").innerHTML = highestValueResult;
});

document.getElementById("edit-button").addEventListener("click", () => {
  const productName = document.getElementById("edit-product-code").value;
  const attribute = document.getElementById("edit-attribute").value;
  const newValue = document.getElementById("edit-new-value").value;
  
  const editResult = inventory.editShoe(productName, attribute, newValue);
  document.getElementById("edit-result").innerHTML = editResult;
});

document.getElementById("sort-button").addEventListener("click", () => {
  const sortedShoes = inventory.sortShoeArray();
  document.getElementById("sort-result").innerHTML = sortedShoes;
});