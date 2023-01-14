//T09 - Compulsory-Task-3

let vehicles=["BMW", "Volvo", "Saab", "Ford", "Audi"];

let favVehicle = "Audi";


for (let i=0; i < vehicles.length; i++){
    if (vehicles[i]==favVehicle){
        console.log (`The ${favVehicle} is my favorite vehicle`);
    }else{
        console.log (`The ${vehicles[i]} is not my favorite vehicle`);
        //repeated for every other vehicle.


    }
    
}

