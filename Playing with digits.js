// Playing with digits

function digPow(n, p){
    let num = n +'';
    let sum = 0;
    for (let digit of num){
        sum += Math.pow(digit, p);
        p++;

    }
    if ((sum / n) % 1 === 0){
        return sum / n;
    } else {
        return -1;
    }
}