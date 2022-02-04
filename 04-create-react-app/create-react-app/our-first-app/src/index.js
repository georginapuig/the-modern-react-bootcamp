import { choice, remove } from './helpers';
import fruits from './foods';

// Randomly draw a fruit from the array
const randomFruit = choice(fruits);
// Log the message “I’d like one RANDOMFRUIT, please.” 
console.log(`I’d like one ${randomFruit}, please.`);
// Log the message “Here you go: RANDOMFRUIT”
console.log(`Here you go: ${randomFruit}`);
// Log the message “Delicious! May I have another?”
console.log('Delicious! May I have another?');
// Remove the fruit from the array of fruits
const fruitsLeft = remove(fruits, randomFruit);
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I’m sorry, we’re all out. We have ${fruitsLeft.length} other fruits left.`);

