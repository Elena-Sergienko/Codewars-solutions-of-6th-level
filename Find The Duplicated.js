// 6 kyu
// Find The Duplicated Number in a Consecutive Unsorted List - Tougher Version
// Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.
//  Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.

function findDup(arr) {
    return arr.filter((el, i) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el))[0]
}