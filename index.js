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
    const listItem = document.createElement('li');// create new list item
    listItem.textContent = inputValue; // set its text

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = '10px';
    removeBtn.style.background = 'red';
    removeBtn.style.color = 'white';
    removeBtn.style.border = 'none';
    removeBtn.style.padding = '3px 6px';
    removeBtn.style.borderRadius = '3px';
    removeBtn.style.cursor = 'pointer';

    removeBtn.addEventListener('click', () => {
      listItem.remove();
      message.textContent = "";
    });

    listItem.appendChild(removeBtn);
    list.appendChild(listItem);//add it to the list

    input.value = "";//clear input
    message.textContent = "";
  }
});




