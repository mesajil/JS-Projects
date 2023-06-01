const compareAnagrams = require('./anagrams');

const CASES = [
    "Same length and frequency",
    "Same length and different frequency",
    "Different length and different frequency",
]

test(CASES[0], () => { expect(compareAnagrams("abc", "cba")).toBe(true); });
test(CASES[0], () => { expect(compareAnagrams("", "")).toBe(true); });
test(CASES[0], () => { expect(compareAnagrams("a", "a")).toBe(true); });
test(CASES[1], () => { expect(compareAnagrams("abc", "cbc")).toBe(false); });
test(CASES[1], () => { expect(compareAnagrams("abc", "caa")).toBe(false); });
test(CASES[2], () => { expect(compareAnagrams("acbc", "cbcad")).toBe(false); });