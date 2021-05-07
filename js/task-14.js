// function friend(friends) {
//   return friends.filter(a => a.length === 4);
// }

// friend(['Ryan', 'Kieran', 'Mark']);
// friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']);

// friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']);

// friend(['Love', 'Your', 'Face', '1']);

// console.log(friend(['Ryan', 'Kieran', 'Mark']));
// const numbers = [1, 2, 3, 4, 5];

// const summ = numbers.reduce((acc, value) => acc + value, 0);

// console.log(summ); // 15

// function solution(number) {
//   let result = [];

//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       result.push(i);
//     }
//   }
//   let oop = result.reduce((acc, value) => acc + value, 0);
//   return oop;
// }

// console.log(solution(10));
function anagrams(word, words) {
  let result = [...word].sort().join('');
  for (let i = 0; i < words.length; i++) {}
  console.log(words.includes(result));

  return result;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// => ['aabb', 'bbaa']
