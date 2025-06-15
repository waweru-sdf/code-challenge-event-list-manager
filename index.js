const input = document.getElementById('type');
const button = document.getElementById('btn');
const list = document.getElementById('itemList');
const message = document.getElementById('message');


// Add click event
button.addEventListener('click', () => {
  const inputValue = input.value.trim(); // Get input value

 const currentGuests = list.getElementsByTagName('li').length;

  if (currentGuests >= 10) {
    message.textContent = "You can only add up to 10 guests.";
    return;
  }


  if (inputValue !== "") {
    const listItem = document.createElement('li'); // Create new list item
    listItem.textContent = inputValue; // Set its text
    list.appendChild(listItem); // Add it to the list
    input.value = ""; // Clear input
    message.textContent="";
  }
});








