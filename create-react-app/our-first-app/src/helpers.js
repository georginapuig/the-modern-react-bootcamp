// returns a randomly selected item from array of items 
const choice = items => items[Math.floor(Math.random() * items.length)];

// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
const remove = (items, item) => {
  items.splice(items.indexOf(item), 1);
  return items;
};

export { choice, remove }