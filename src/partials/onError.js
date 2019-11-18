/* eslint-disable import/prefer-default-export */
const error = document.createElement('div');
const container = document.querySelector('.container');

const onError = (city) => {
  error.innerHTML = `${city} doesn't exist. Try another one.`;
  error.classList.add('error');
  container.appendChild(error);
  setTimeout(() => error.remove(), 3000);
};

export { onError };
