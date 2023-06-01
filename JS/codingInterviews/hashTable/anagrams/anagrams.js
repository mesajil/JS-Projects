const { getFrequency, sortString } = require('../../utils/utils');

const compareAnagrams = (a1, a2) => {
    
    if (a1.length !== a2.length) return false
    a1 = sortString(a1)
    a2 = sortString(a2)
    for (let i = 0; i < a1.length; i++) {
        if (a1[i] !== a2[i]) return false
    }
    return true
}


const compareAnagramsHashTable = (a1, a2) => {

    if (a1.length !== a2.length) return false
    const frequency1 = getFrequency(a1)
    const frequency2 = getFrequency(a2)
    // Compare frequency
    for (key in frequency1) {
        if (!(key in frequency2) || (frequency1[key] !== frequency2[key]))
            return false
    }
    return true
}



module.exports = compareAnagramsHashTable;

