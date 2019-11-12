let error = document.getElementById('error');

let onError = city => {
  error.innerHTML = `${city} doesn't exist. Try another one.`
}

export { onError };