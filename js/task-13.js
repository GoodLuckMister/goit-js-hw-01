// function inArray(array1, array2) {
//   var result = [];
//   var newResult = [];

//   for (var i = 0; i < array2.length; i++) {
//     for (var j = 0; j < array1.length; j++) {
//       console.log(array2[i].includes(array1[j]));
//       if (array2[i].includes(array1[j])) {
//         result.push(array1[j]);
//       }
//     }
//   }

//   for (var k = 0; k < result.length; k++) {
//     if (result[k] !== result[k + 1]) {
//       newResult.push(result[k]);
//     }
//   }

//   return newResult.sort();
// }

// const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

// let a1 = ['xyz', 'live', 'strong'];
// console.log(inArray(a1, a2)); //["live", "strong"]//
// a1 = ['live', 'strong', 'arp'];
// console.log(inArray(a1, a2)); //["arp", "live", "strong"]//
// a1 = ['tarp', 'mice', 'bull'];
// console.log(inArray(a1, a2));
// []//

// function findNb(m) {
//   var n = 0;
//   while (m > 0) {
//     m -= (++n) ** 3;
//     console.log(m);
//   }
//   return m ? -1 : n;
// }
// console.log(findNb(9));
// console.log((-2) **
// function pigIt(str) {
//   const array = [...str];
//   array.forEach((element, index, arr) => {
//     console.log([...arr[index]]);
//   });

//   return;
// }
// console.log(pigIt('Pig latin is cool')); //'igPay atinlay siay oolcay'
function doneOrNot(board) {
  //your code here
  let result = 'Finished!';

  for (let i = 0; i < board.length; i++) {
    console.log(board[i].sort());
  }
  //   board[i].sort().map(nr => {
  //     const curr = board[i].indexOf(nr) + 1;

  //     if (curr !== nr) return (result = 'Try again!');
  //   });
  // }
  return result;
}
// console.log(
//   doneOrNot([
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9],
//   ]),
// );

// 'Finished!',

console.log(
  doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9],
  ]),
);
// 'Try again!',
