// 6 kyu
// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    let count = 1;
    let n = 0;
    arr = arr.sort();
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === arr[i+1]){
            count++;
        } else {
            if (count % 2 !== 0){
                n = arr[i];
            } else {
                count = 1;
            }
        }
    }
    return n;
}