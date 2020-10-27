// 6 kyu
// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
// The tests contain some very huge arrays, so think about performance.
// This is the first kata in series:
// Find the unique number (this kata)
// Find the unique string
// Find The Unique


function findUniq(arr) {
    let swap = true;

    while (swap){
        swap = false;

        for (let i = 0; i < arr.length - 1; i++){
            if (arr[i] > arr[i+1]){
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
                swap = true;
            }
        }
    }

    return arr[0] < arr[1] ? arr[0] : arr[arr.length-1];
}
