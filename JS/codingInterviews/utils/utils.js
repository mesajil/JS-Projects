
const valueIsIncludeInObject = (obj, valueToCheck) =>
    Object.values(obj).includes(valueToCheck)

const addFrequencyToObject = (obj, key, frequency) => {
    obj[key] = obj.hasOwnProperty(key)
        ? obj[key] + frequency
        : frequency
}

const getFrequency = (str) => {
    const frequency = {}
    Array.from(str).forEach((char) => {
        addFrequencyToObject(frequency, char, 1)
    });
    return frequency
}

const sortString = (str) => {
    list = str.split("")
    list.sort()
    return list.join("")
}

module.exports = {
    valueIsIncludeInObject,
    addFrequencyToObject,
    getFrequency,
    sortString,
};