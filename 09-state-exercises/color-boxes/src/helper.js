function randomColor(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex]
}

export { randomColor };