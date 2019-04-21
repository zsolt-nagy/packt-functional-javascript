// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

const { map } = rxjs.operators;

rxjs.from( [1,2,3] )
    .pipe( map( x => 2*x ) )
    .subscribe( console.log );
