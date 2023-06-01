
/**
 * Technical test - Uber
 * 
 * Given an array of unordered integers, return the smallest missing positive integer.
 * 
 * For example
 * 
 * [] -> 1
 * [1, 2, 3, 5] -> 4
 */


module.exports = (array) => {
    // Build the hash table
    const hashTable = array.reduce(
        (hashTable, number) => (
            { ...hashTable, [number]: number }
        ),
        {}
    )

    // Find the smallest
    let smallest = 1
    while (hashTable[smallest]) { smallest++ };
    return smallest;
};