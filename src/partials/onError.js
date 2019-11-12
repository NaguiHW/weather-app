let error = document.getElementById('error');

let onError = city => {
  error.innerHTML = `${city} doesn't exist. Try another one.`
  setTimeout(() => error.remove(), 3000);
}

export { onError };