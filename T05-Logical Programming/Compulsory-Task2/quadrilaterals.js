// T05 - Compulsory Task 2

let side1 = parseFloat(prompt ("Enter length of side 1: " ));
let side2 = parseFloat(prompt ("Enter length of side 2: " ));
let side3 = parseFloat(prompt ("Enter length of side 3: " ));
let side4 = parseFloat(prompt ("Enter length of side 4: " ));

// Opposite corners (angles) are equal in all
// four quadrilateral shapes. 

let corner1 =  90;
let corner2 =  90;
let corner3 =  90;
let corner4 =  90;


if ((side1===side2)&&(side3===side4)
     && (corner1===corner2)&&(corner3===corner4)){

        console.log ("It is a square.");

    }else if

        (((side1===side2)&&(side3===side4)
        && (corner1===corner3)<90 || (corner2===corner4)<90)
        &&  ((corner1===corner3)>90 || (corner2===corner4)>90)){

            console.log ("It is a rhombus."); 

    }else if

         ((side1===side3) && (side2===side4) 
        && (corner1===corner2)&&(corner3===corner4)){

            console.log ("It is a rectangle.");

    }else if

        ((side1===side3) && (side2===side4) 
        && (corner1===corner3) && (corner2===corner4)){

        console.log ("It is a parallelogram.");

    }else{

        console.log ("It is some other quadrilateral shape.");

    }        

    
   
       

     




    
    











