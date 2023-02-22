//get all save buttons and set them to an array
const saveBtns = document.getElementsByClassName("save-btn");

//get remove button
const removeBtn = document.getElementById("remove-btn");

//declare variable for how many items we saved
let numSavedItems = 0;

//get saved data from local storage or return empty array
let savedItems = localStorage.getItem('savedItems') ? [localStorage.getItem('savedItems')] : [];

for (let i = 0; i < saveBtns.length; i++) {
    saveBtn = saveBtns[i];

    saveBtn.addEventListener("click", (event) => {
        //get clicked button parent
        const item = event.target.parentElement;

        //in here we get all items an Article
        const nodeList = item.children;
        
        const itemId = item.getAttribute("data-id");

        //we set values to variables
        const [img, title, time, description, url] = nodeList;
        console.log(url.href)
        //convert them to object and JSON
        const obj = {
            itemId: itemId,
            src: img.src,
            title: title.innerText,
            time: time.innerText,
            description: description.innerText,
            url: url.href
        };

        //we get how many data saved value
        let numItems = savedItems.length;

        numSavedItems = `You have ${numItems} item${numItems === 1 ? "" : "s"} saved for later`;

        const foundItem = savedItems.find(item => item.itemId === itemId);
        

        if (!foundItem) {

            //we push unsaved object to array
            savedItems.push(obj);
          
            //and save array to local storage
            localStorage.setItem('savedItems', JSON.stringify(savedItems));

            alert("Item saved for later \n" + numSavedItems);
        } else {
            alert("Item aleady saved \n");
            console.log(`No item found with ID ${itemId}.`);
        }
    });
}

removeBtn.addEventListener("click", clearSavedItems);
//clear all saved data
function clearSavedItems() {
    localStorage.clear();
    console.log(savedItems.length);
    savedItems = [];
    console.log(savedItems.length);
    alert("Saved items have been cleared.");
}




// Get all the like buttons
const likeButtons = document.querySelectorAll('.like-button');

// Add an event listener to each like button
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the current like count for this item
    const likeCount = button.parentElement.querySelector('.like-count');

    // Increment the like count and update the text
    let count = parseInt(likeCount.textContent.split(' ')[0]);
    count++;
    likeCount.textContent = `${count} ${count === 1 ? 'like' : 'likes'}`;

    // Save the updated like count to local storage
    const itemId = button.parentElement.id;
    localStorage.setItem(`like-count-${itemId}`, count);
  });
});

// On page load, set the initial like count for each item
const items = document.querySelectorAll('.item');
items.forEach(item => {
  const itemId = item.id;
  const likeCount = localStorage.getItem(`like-count-${itemId}`);
  if (likeCount !== null) {
    item.querySelector('.like-count').textContent = `${likeCount} ${likeCount === 1 ? 'like' : 'likes'}`;
  }
});
