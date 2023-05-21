
// Generator
function* countFrom(start) {
    let num = start;
    while (true) {
        yield num // generator: { value: num, done: false }
        num++;
        if (num === 5)
        return 'Hello World!' // generator: { value: returnValue, done: true }
    }
}

let generator = countFrom(3) // Return the generator object

/**
 * Each yield statement:
 * Return the yield value
 * Pause the generator
 * The state 'done' is 'false'.
 */
console.log(generator.next().value); // Start the function execution
console.log(generator.next().value);
const { value, done } = generator.next() // Watch properties 
console.log(`Value: ${value}, done: ${done}`)
console.log(generator.next().value);


