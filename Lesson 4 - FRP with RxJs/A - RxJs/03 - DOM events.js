// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

keys = rxjs.fromEvent( window, 'keypress' );
keys.subscribe( x => console.log( x.keyCode ) );
