// Function to update the time
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeString = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  // Update the time on the web page
  document.getElementById("time").textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);
