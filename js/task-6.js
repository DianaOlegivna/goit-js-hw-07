function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) { 
  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) { 
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(div);
  }

  boxes.append(...elements);
}



function destroyBoxes() { 
  boxes.innerHTML = '';
}

function handleCreateBoxes() { 
  const amount = Number(input.value);

  if (amount >= 1 && amount <= 100) { 
    destroyBoxes();
    createBoxes(amount); 
    input.value = "";
  } 
}

function handleDestroyBoxes() { 
  destroyBoxes();
}

createBtn.addEventListener('click', handleCreateBoxes);
destroyBtn.addEventListener('click', handleDestroyBoxes);

