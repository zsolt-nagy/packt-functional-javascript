// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

const { interval } = rxjs;
const { take, map, flatMap } = rxjs.operators;

interval( 1000 ).pipe(
    take( 10 ),
    flatMap( x => interval( 100 )
                  .pipe( take( 10 ), map( y => `${x}.${y}` ) )
    )
).subscribe( console.log );
