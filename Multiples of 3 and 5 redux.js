// 6 kyu
// Multiples of 3 and 5 redux
// The galactic games have begun!
// It's the galactic games! Beings of all worlds come together to compete in several interesting sports, like nroogring, fredling and buzzing (the beefolks love the last one). However, there's also the traditional marathon run.
// Unfortunately, there have been cheaters in the last years, and the committee decided to place sensors on the track. Committees being committees, they've come up with the following rule:
// A sensor should be placed every 3 and 5 meters from the start, e.g. at 3m, 5m, 6m, 9m, 10m, 12m, 15m, 18m….
// Since you're responsible for the track, you need to buy those sensors. Even worse, you don't know how long the track will be! And since there might be more than a single track, and you can't be bothered to do all of this by hand, you decide to write a program instead.
// Task
// Return the sum of the multiples of 3 and 5 below a number. Being the galactic games, the tracks can get rather large, so your solution should work for really large numbers (greater than 1,000,000).
// Examples
// solution (10) // => 23 = 3 + 5 + 6 + 9
// solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18

function solution(number) {
    number = number - 1;
    let sum_3 = ((Math.trunc(number / 3) * (Math.trunc(number / 3) + 1)) / 2) * 3
    let sum_5 = ((Math.trunc(number / 5) * (Math.trunc(number / 5) + 1)) / 2) * 5
    let sum_15 = ((Math.trunc(number / 15) * (Math.trunc(number / 15) + 1)) / 2) * 15

    return sum_3 + sum_5 - sum_15; // формула Гауста, 15 вычитаем тк 15 два раза считаются и в 3 и в 5
}