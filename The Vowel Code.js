// 6 kyu
// The Vowel Code
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
// -------------------------

function encode(string) {
    let letter = 'aeiou';
    return string.replace(/./g, el => letter.includes(el) ? letter.indexOf(el) + 1: el);
}

function decode(string) {
    let dig = '1234';
    let letter = 'aeiou';
    return string.replace(/./g, el => dig.includes(el) ? letter[el-1] : el);
}

// -------------------------


function encode(string) {
    let str = '';
    for(let i = 0; i < string.length; i++){
        if (string[i] === 'a'){
            str = str + '1';
        } else if (string[i] === 'e'){
            str = str + '2';
        } else if (string[i] === 'i'){
            str = str + '3';
        } else if (string[i] === 'o'){
            str = str + '4';
        } else if (string[i] === 'u'){
            str = str + '5';
        } else {
            str = str + string[i];
        }

    }
    return str;
}

function decode(string) {
    let str2 = '';
    for(let i = 0; i < string.length; i++){
        if (string[i] === '1'){
            str2 = str2 + 'a';
        } else if (string[i] === '2'){
            str2 = str2 + 'e';
        } else if (string[i] === '3'){
            str2 = str2 + 'i';
        } else if (string[i] === '4'){
            str2 = str2 + 'o';
        } else if (string[i] === '5'){
            str = str + 'u';
        } else {
            str2 = str2 + string[i];
        }

    }
    return str2;
}