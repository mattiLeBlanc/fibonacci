/*
  Create a Fibonacci sequence using array reduce accumulater
*/

function fib( n ) {
  var arr = [...Array( n ).keys() ];
  return arr.reduce( ( accumulator, currentVal ) => {
    return [
      ...accumulator,
      currentVal <= 1 ? currentVal : accumulator[currentVal-1] + accumulator[currentVal-2]
    ];
  }, [] );
}
console.log( fib( 10 ) ); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

