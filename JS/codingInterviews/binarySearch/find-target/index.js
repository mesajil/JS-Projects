


const findInteger = (sortedArray, target) => {
    /**
     * Time C: O(n)
     * Space C: S(1)
     */
    let first = -1, last = -1
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === target) {
            first = first === -1 ? i : first
            last = i;
        }
        if (first !== -1 && sortedArray[i] !== target) break;
    }
    return [first, last]
}



const modifiedBinarySearch = (A, target, start, end, cb = (mid) => mid) => {
    /**
     * Time C: O(log(n))
     * Space C: S(log(n)) 
     */
    if (start > end) return -1
    let mid = Math.floor((start + end) / 2)
    if (A[mid] === target) return cb(mid, start, end)
    if (A[mid] > target) return modifiedBinarySearch(A, target, start, mid - 1, cb)
    return modifiedBinarySearch(A, target, mid + 1, end, cb)
}

const findIntegerBinarySearch = (sortedArray, target) => {
    const getFirst = (mid, start, _) => {
        return sortedArray[mid - 1] === target
        ? modifiedBinarySearch (sortedArray, target, start, mid - 1, getFirst)
        : mid
    }
    const getLast = (mid, _, end) => {
        return sortedArray[mid + 1] === target
        ? modifiedBinarySearch (sortedArray, target, mid + 1, end, getLast)
        : mid
    }
    return [
        modifiedBinarySearch(sortedArray, target, 0, sortedArray.length - 1, getFirst),
        modifiedBinarySearch(sortedArray, target, 0, sortedArray.length - 1, getLast),
    ]
}
// console.log(modifiedBinarySearch([1,2,3], 12, 0, 2));
module.exports = findIntegerBinarySearch;