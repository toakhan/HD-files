// T05- Compulsory Task 2

let side1 = prompt ("Enter length of side 1: " );
let side2 = prompt ("Enter length of side 2: " );
let side3 = prompt ("Enter length of side 3: " );
let side4 = prompt ("Enter length of side 4: " );

// Opposite corners (angles) are equal in all
// four quadrilateral shapes. 

let corner1 =  60;
let corner2 = 120;
let corner3 =  60;
let corner4 = 120;

// This is a parallelogram shape,
// if opposite sides are also equal.

if ((side1===side3) && (side2===side4)) {
    console.log ("It is a parallelogram.");
}else{
    console.log ("It is some other quadrilateral shape.");
    
}
