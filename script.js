var defaultValue = document.getElementById('defaultValue');
var span = document.querySelector('span');
var button = document.querySelectorAll('.button');
var clearButton = document.querySelector('.clear');
var deleteButton = document.querySelector('.delete');
var currentValue = ''

clearButton.addEventListener('click', () => {
  currentValue = '';
  defaultValue.textContent = '0';
});

deleteButton.addEventListener('click', () => {
  currentValue = currentValue.slice(0, -1);
  if (currentValue === '') {
    defaultValue.textContent = '0';
  } else {
    defaultValue.textContent = currentValue;
  }
});

button.forEach(btn => {
  btn.addEventListener('click', () => {
    defaultValue.textContent = currentValue;
    if (currentValue === '0') {
      currentValue = btn.value;
    }
    else {
      currentValue += btn.value;
    }
    defaultValue.textContent = currentValue;
    defaultValue.scrollLeft = defaultValue.scrollWidth;
  });
});

window.addEventListener('keydown', function(event) {
  var keyPressed = event.key;
  var buttonToClick;

  if (!isNaN(keyPressed)) {

    buttonToClick = document.querySelector('.num-' + keyPressed)

  } else {

    switch(keyPressed) {
      case '+':
        buttonToClick = document.querySelector('.num-add');
        break;
      case '-':
        buttonToClick = document.querySelector('.num-substract');
        break;
      case '*':
        buttonToClick = document.querySelector('.num-multiply');
        break;
      case '/':
        buttonToClick = document.querySelector('.num-divide');
        break;
      case '%':
        buttonToClick = document.querySelector('.num-percentage');
        break;
      case '.':
        buttonToClick = document.querySelector('.num-point');
        break;
      case 'Delete':
        buttonToClick = document.querySelector('.clear');
        break;
      case 'Backspace':
        buttonToClick = document.querySelector('.delete');
        break;
      case 'Enter':
        buttonToClick = document.getElementById('equal');
        break;
    }
  }

  if(buttonToClick) {
    buttonToClick.click();
  }

});