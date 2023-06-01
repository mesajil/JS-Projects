const findInteger = require('./index');

const CASES = [
    "Element is not in the Array",
    "Element is in the Array one time",
    "Element is in the Array multiple times",
]

test(CASES[0], () => { expect(findInteger([1,1,2,3], 4)).toEqual([-1,-1]); });
test(CASES[0], () => { expect(findInteger([1], 4)).toEqual([-1,-1]); });
test(CASES[0], () => { expect(findInteger([], 4)).toEqual([-1,-1]); });

test(CASES[1], () => { expect(findInteger([1,2,3], 2)).toEqual([1,1]); });
test(CASES[1], () => { expect(findInteger([1], 1)).toEqual([0,0]); });
test(CASES[1], () => { expect(findInteger([1,2,3,4], 4)).toEqual([3,3]); });

test(CASES[2], () => { expect(findInteger([1,2,2,3], 2)).toEqual([1,2]); });
test(CASES[2], () => { expect(findInteger([1,1,1,1], 1)).toEqual([0,3]); });
test(CASES[2], () => { expect(findInteger([1,2,3,4,4], 4)).toEqual([3,4]); });
