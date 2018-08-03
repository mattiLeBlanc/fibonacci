/*
  Create a range of Fibonacci numbers using the Array constructor to create an array with steps.
  
  I realize you can also use an index that get's incremented instead of using an array loop. 
  Initally I wanted to use Map but that didn't work.
  I still keep the Array constructor in this example because I find it damn sexy with the spreak operator :)
*/

function fib( n ) {
  var arr = [ ...Array( n ).keys() ]; // <-- damn sexy!
  var result = [];
  arr.forEach( (val, idx ) => {
    if ( idx <= 1 ) {
      result.push( idx );
    }
    else {
      result.push( ( result[ idx-2] ) + ( result[ idx-1 ] ) );
    }
  } )
  return result;
}

// generate a range of 10
fib( 10 ); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
