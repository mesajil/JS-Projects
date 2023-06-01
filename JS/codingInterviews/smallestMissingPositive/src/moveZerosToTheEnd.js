/**
 * From a list of numbers, move the zeros to the end of the list.
 */

module.exports = (array) => {
    let zeros = [];

    // Filter no zeros
    let results = array.filter(number => {
        if (number === 0) zeros.push(0);
        return number !== 0
    })

    // Add zeros
    return [...results, ...zeros];
}
