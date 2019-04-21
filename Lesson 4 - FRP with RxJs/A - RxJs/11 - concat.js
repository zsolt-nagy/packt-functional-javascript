// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

rxjs.concat(
    rxjs.interval( 1000 ).pipe( rxjs.operators.take( 10 ) ),
    rxjs.from( [4, 5, 6] )
).subscribe( console.log );

/*  // Alternative:
rxjs.interval( 1000 ).pipe(
    rxjs.operators.take( 10 ),
    rxjs.operators.concat( rxjs.from( [4, 5, 6] ) )
).subscribe( console.log );

*/
