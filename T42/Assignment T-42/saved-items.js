const savedList = document.getElementById('item-list');

let savedItems = JSON.parse(localStorage.getItem("savedItems"))
console.log(savedItems)




for (const item of savedItems) {
  const fullPath=item.src;
  const filename = fullPath.split("/").pop();

  const url=item.url;
  const href = url.split("/").pop();

  var template = `
<li>
  <div class="post-block">
    <img src="./img/${filename}" alt="Post Image" width="150" height="150">
    <h3>${item.title}</h3>
    <span>${item.time}</span>
    <p>${item.description}</p>
    <a href="${href}" class="btn">Read More</a>
  </div>
</li>`;
  savedList.insertAdjacentHTML("beforeend", template);
}


