//class named shoes (class is a blueprint to 
//make an object)

//Two methods to make a object: 1. Using object
//literals (easiest) 2. Using object constructor 
//method to create many objects.

//Using first method:

/*
let shoe= {
    name: "nike",
    productCode: "nk15",
    quantity: 2,
    valuePerItem: "£30",
    shoeName: function(){
        return `The shoe name is ${nike}`;
    }
};

*/

// Using second mrthod (Objects constructor method):

function shoeDescription(name, productCode, quantity, valuePerItem){
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
};

let shoe = new shoeDescription("nike", "nk15", 2, 30);
let shoe2= new shoeDescription("addidas", "ad34", 1, 19.99);
let shoe3= new shoeDescription("sonic", "so786", 3, 9.99);
let shoe4= new shoeDescription("abc", "a456", 3, 6.99);
let shoe5= new shoeDescription("xyz", "x789", 3, 4.99);

let shoeArray = [];
shoeArray.push(shoe,shoe2,shoe3,shoe4,shoe5);

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

