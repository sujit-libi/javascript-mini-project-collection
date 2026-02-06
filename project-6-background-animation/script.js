const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();

for (let i = 1; i < 1500; i++) {
  const shape = document.createElement('span');
  fragment.appendChild(shape);
}

container.appendChild(fragment);
