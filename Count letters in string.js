// 6 kyu
// Count letters in string
// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter'
// as key and count as 'value'. The key must be 'symbol' instead of string
// in Ruby and 'char' instead of string in Crystal.

function letterCount(s) {
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    let obj = {};
    for (let letter of s) {
        if (letter in obj) {
            obj[letter]++
        } else {
            obj[letter] = 1;
        }
    }
    return obj;
}