// lab-03-module.js

// TODO Part 8: Use the spread operator to reverse the string
function reverseString(str) {
    // Original: return str.split("").reverse().join("");
    return [...str].reverse().join("");
}

// TODO Part 9 & 10: Export both functions
module.exports = {
    reverseString,
    concatenateString: function (str) {
        return str + str;
    }
};