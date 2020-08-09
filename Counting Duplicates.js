//6 kyu
//Counting Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//
//Example
//"abcde" -> 0 # no characters repeats more than once
//"aabbcde" -> 2 # 'a' and 'b'
//"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//"indivisibility" -> 1 # 'i' occurs six times
//"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//"aA11" -> 2 # 'a' and '1'
//"ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  let res = '';
  let arr = text.toLowerCase().split('')
  let count = 0;
  for (let i = 0; i < text.length; i++){
    for (let j = 0; j < arr.length; j++){
      if (text[i].toLowerCase() === arr[j]) count++;
    }
    if (count >= 2) res+= text[i];
    count = 0;
    let num = text[i].toLowerCase()
    arr = arr.filter(el => el !== num)
  }
return res.length;
}