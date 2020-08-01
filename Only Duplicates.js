// 6 kyu
// Only Duplicates
// Given a string, remove any characters that are unique from the string.
// Example:
// input: "abccdefee"
// output: "cceee"


function onlyDuplicates(str) {
    let arr = str.split('');
    return arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el)).join('');
}