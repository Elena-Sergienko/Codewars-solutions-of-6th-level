// 6 kyu
// Are we alternate?
// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.
// isAlt("amazon")
// true
// isAlt("apple")
// false
// isAlt("banana")
// true
// Arguments consist of only lowercase letters.

function isAlt(word) {
    let res = '';
    let resC = 0;
    for (let i = 0; i < word.length; i++){
        if ('aoiue'.includes(word[i])){
            res = res + '0';
        } else {
            res = res + '1';
        }
    }
    if (res === '01'.repeat(word.length / 2) || res === '10'.repeat(word.length / 2) || res === '0' || res === '1' || res === '01'.repeat((Math.trunc(word.length) / 2)) + '0' || res === '10'.repeat((Math.trunc(word.length) / 2)) + '1') {
        console.log(res);
        return true;
    } else {
        console.log(res);
        return false;
    }

}