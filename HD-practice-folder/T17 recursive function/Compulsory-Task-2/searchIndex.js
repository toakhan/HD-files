
function dataArray( arr ,item){
	if (arr.length-1==0){
		return -1 //base case
	}
	else if (arr[arr.length-1]==item){
		return arr.length-1//last index
	}
	else {
		return dataArray(arr.slice(0,-1),item)//calling function again

	}

}

let arr=["java", "html","javaScripts","css"];
//console.log(arr.slice(0,-1))//gives last index
console.log (dataArray(arr,"javaScripts"))

/*        if( arr[i] == "css" ){
            console.log( "css found.");
            return true;
        } else if( Array.isArray( arr[i] ) ){
            if (dataArray(arr[i])) return true;
        }
    

    return false;
	*/


/*	Comments:
To find index of an element in an array 
findIndex() is used.
 
To find the index of a value, 
use indexOf() . ...

To find if a value exists in an 
array, use includes() . ...

To find if any element satisfies 
the provided testing function, use some() .

*/

/*
var getSubMenuItem = function (subMenuItems, id) {
    if (subMenuItems) {
        for (var i = 0; i < subMenuItems.length; i++) {
            if (subMenuItems[i].id == id) {
                return subMenuItems[i];
            }
            var found = getSubMenuItem(subMenuItems[i].items, id);
            if (found) return found;
        }
    }
};
// Recursive function to search for x in arr[]
int searchElement(int arr[], int size, int x) {
	size--;
	
	// Base case (Element not present in the array)
	if (size < 0) {
		return -1;
	}
	// Base case (Element found, return its position)
	if (arr[size] == x) {
		return size;
	}

	// Recursive case
	return searchElement(arr, size, x);

}

// Driver code
int main() {
	int arr[] = {17, 15, 11, 8, 13, 19};
	int size = sizeof(arr) / sizeof(arr[0]);
	int x = 11;
	int idx = searchElement(arr, size, x);
	if (idx != -1)
		cout << "Element " << x << " is present at index " <<idx;
	else
		cout << "Element " << x << " is not present in the array";
	return 0;
}
*/





    

    
