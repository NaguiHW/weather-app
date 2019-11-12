let error = document.createElement('div');
let container = document.querySelector('.container');

let onError = city => {
  error.innerHTML = `${city} doesn't exist. Try another one.`
  error.classList.add('error');
  container.appendChild(error);
  setTimeout(() => error.remove(), 3000);
}

export { onError };