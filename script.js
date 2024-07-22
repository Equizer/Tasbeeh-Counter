
//variables
let count = JSON.parse(localStorage.getItem("count")) || 0;

//calling function 
displayCount();

document.querySelector('.js-add-button').addEventListener('click', () => {
  tasbeehCount(1);
})

document.querySelector('.js-subtract-button').addEventListener('click', () => {
  if (count > 0)
    tasbeehCount(-1);
})

document.querySelector('.js-reset-button').addEventListener('click', () => {
  displayPopup();
})

document.querySelector('.js-save-button').addEventListener('click', () => {
  saveCount();
})


//function definiton
function displayCount() {
  document.querySelector('.js-display-count').innerHTML = `Count: ${count}`;
}


function tasbeehCount(number) {
  count += number;
  displayCount();
}

//saving the data to local storage
function saveCount() {
  localStorage.setItem("count", JSON.stringify(count));
}

//deleting the count
function deleteCount() {
  count = 0;
  localStorage.removeItem("count");
}


//display displayPopup 
function displayPopup() {
  const popup = document.querySelector('.js-popup-div');
  popup.classList.add('question');
  popup.innerHTML = `Are you sure you want to reset your count?
  <div class="question-button-grid">
    <button class="question-yes js-yes">YES</button>
    <button class="question-no js-no">NO</button>
  </div>`;

  document.querySelector('.js-yes').addEventListener('click', () => {
    deleteCount();
    popup.classList.remove('question');
    popup.innerHTML = '';
    displayCount();
  })
  document.querySelector('.js-no').addEventListener('click', () => {
    popup.classList.remove('question');
    popup.innerHTML = '';
    displayCount();
  })
}

