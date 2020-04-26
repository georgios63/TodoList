const input = document.querySelector('.input');
const container = document.querySelector('.todo-list');
const form = document.querySelector('.todo-form');
let checked = true;


function createUl(listItem) {
  const id = Date.now();

  const node = document.createElement('span');
  node.classList.add('text-input');
  node.setAttribute('id', `${id}`);

  const text = document.createTextNode(listItem);
  node.appendChild(text);

  const checkbox = document.createElement('input');
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';

  const itemBox = document.createElement('li');
  itemBox.classList.add('item');
  itemBox.setAttribute('id', `${id}`);

  const removeButton = document.createElement('button');
  removeButton.innerHTML = 'done';
  removeButton.classList.add('removeButton');

  container.appendChild(itemBox);

  itemBox.appendChild(checkbox);
  itemBox.appendChild(node);
  itemBox.appendChild(removeButton);

  removeButton.addEventListener('click', () => {
    container.removeChild(itemBox);
  });
}


function check() {
  if (input.value !== '') {
    createUl(input.value);
    input.value = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text !== '') {
    check(text);
    input.value = '';
    input.focus();
  }
});

function toggleDone(key) {
  const item = document.querySelector(`[id='${key}']`);

  if (checked) {
    item.classList.add('done');
    container.append(item);
  }
}

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('checkbox')) {
    const checkBox = event.target;
    const itemKey = event.target.parentElement.id;
    checked = true;
    checkBox.disabled = true;
    toggleDone(itemKey);
  }
});
