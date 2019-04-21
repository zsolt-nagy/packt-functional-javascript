// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

const { take, map } = rxjs.operators;

keys = rxjs
    .fromEvent( window, 'keypress' )
    .pipe( take( 5 ), map( x => x.keyCode ) )
    .subscribe( console.log );
