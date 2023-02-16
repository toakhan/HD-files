// Compulsory Task T-20

// Define the Shoes class
class Shoes {
  constructor(name, productCode, quantity, valuePerItem) {
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
  }
}

const shoeInventory = [];

// Create 5 instances (objects) of the Shoes class and push them 
// to the shoeInventory array
shoeInventory.push(
  new Shoes("Reebok", "R001", 10, 120),
  new Shoes("Adidas", "A001", 5, 80),
  new Shoes("Vans", "V001", 8, 65),
  new Shoes("Puma", "P001", 15, 70),
  new Shoes("Converse", "C001", 20, 55)
);

// Method to search for a shoe within the shoeInventory 
// array
function searchShoe(productCode) {
  const shoe = shoeInventory.find((shoe) => shoe.productCode === productCode);
  if (shoe) {
    console.log(`Shoe found: ${shoe.name}`);
  } else {
    console.log(`Shoe with product code ${productCode} not found`);
  }
}

// Method to find the shoe with the lowest value per item
function findLowestValueShoe() {
  let lowestValueShoe = shoeInventory[0];
  shoeInventory.forEach((shoe) => {
    if (shoe.valuePerItem < lowestValueShoe.valuePerItem) {
      lowestValueShoe = shoe;
    }
  });
  console.log(`Shoe with lowest value per item: ${lowestValueShoe.name}`);
}

// Method to find the shoe with the highest value per item
function findHighestValueShoe() {
  let highestValueShoe = shoeInventory[0];
  shoeInventory.forEach((shoe) => {
    if (shoe.valuePerItem > highestValueShoe.valuePerItem) {
      highestValueShoe = shoe;
    }
  });
  console.log(`Shoe with highest value per item: ${highestValueShoe.name}`);
}

// Method to edit any aspect of an instance (object) of 
// the Shoes class
function editShoe(productCode, key, newValue) {
  const shoe = shoeInventory.find((shoe) => shoe.productCode === productCode);
  if (shoe) {
    shoe[key] = newValue;
    console.log(`Shoe ${productCode} ${key} updated to ${newValue}`);
  } else {
    console.log(`Shoe with product code ${productCode} not found`);
  }
}

// Method to order all of the objects in ascending order
function orderShoesByValue() {
  const sortedShoeInventory = shoeInventory.slice().sort((a, b) => a.valuePerItem - b.valuePerItem);
  console.log("Shoe inventory ordered by value per item:");
  sortedShoeInventory.forEach((shoe) => console.log(`${shoe.name} - ${shoe.valuePerItem}`));
}
// Call searchShoe method
searchShoe("AS001");

// Call findLowestValueShoe method
findLowestValueShoe();

// Call findHighestValueShoe method
findHighestValueShoe();

// Call editShoe method
editShoe("NM001", "quantity", 15);

// Call orderShoesByValue method
orderShoesByValue();  




/*
//Notes from T-20 pdf file:

//class named shoes (class is a blueprint to 
//make an object)

//Two methods to make a object: 1. Using object
//literals (easiest) 2. Using object constructor 
//method to create many objects.

//Using first method:


let shoe= {
    name: "nike",
    productCode: "nk15",
    quantity: 2,
    valuePerItem: 30,
    shoeName: function(){
        return `The shoe name is ${nike}`;
    }
};



// Using second method (Objects constructor method):

function shoeDescription(name, productCode, quantity, valuePerItem){
  this.name = name;
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
};

//Created 5 instances (objects) of the shoes class
//and then pushed all (objects) into an array.
let shoe = new shoeDescription("nike", "nk15", 2, 30);
let shoe2= new shoeDescription("addidas", "ad34", 1, 19.99);
let shoe3= new shoeDescription("sonic", "so786", 3, 9.99);
let shoe4= new shoeDescription("abc", "a456", 3, 6.99);
let shoe5= new shoeDescription("xyz", "x789", 3, 4.99);

let shoeArray = [];
shoeArray.push(shoe,shoe2,shoe3,shoe4,shoe5);

//Following methods to interact with the array:

//A method to search for any shoe within 
//the array:

function findAshoe (shoeName){

  let idx = -1;
  for (let i=0; i<shoeArray.length; i++){
      if (shoeArray[i].name==shoeName){ //dot method
          idx=i;
          break;
      }
  }
  console.log(idx)
}

findAshoe("addidas")


//Another method to find the shoe with the lowest
//value per item:

function shoeLowestValue (){
  let lowestValue;
  let idx = 0;
  let counter = 0;

  for (const shoe of shoeArray){
     // console.log(shoe.name);
     //console.log(shoe.valuePerItem)

     if (lowestValue==null){
      lowestValue=shoe.valuePerItem
     }
     if (shoe.valuePerItem<lowestValue){
      lowestValue=shoe.valuePerItem
     }
  }


}
shoeLowestValue()

//IA above code with support mentor to be 
//continued with console.log, i++ and counter 
//until we arrive at the shoe lowest value.


//A method to find the shoe with the highest
//value per item:



//A method to edit any aspect of an instance
//of the shoe class:



//A method to order all of the objects in 
//ascending order:
*/













