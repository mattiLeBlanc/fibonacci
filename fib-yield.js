/*
  Using the yield operator to create a traversable collection of fibonacci numbers
*/

function* fib (  ) {
  var fib1=0,
    fib2=1,
    current,
    reset
  ;
  
  while( true ) {
    current = fib1;
    fib1 = fib2;
    fib2 = current + fib1;
    reset = yield current;
    if ( reset ) {
      fib1 = 0;
      fib2 = 1;
    }
  }
}

var interator = fib(10);
iterator.next(); // { value: 0, done: false }
iterator.next(); // { value: 1, done: false }
// ..
iterator.next(); // { value: 34, done: false }
iterator.next( true ); // { value: 0, done: false }
iterator.next(); // { value: 1, done: false }
// .. etc
