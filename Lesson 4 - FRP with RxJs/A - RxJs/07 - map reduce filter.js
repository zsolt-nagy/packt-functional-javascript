// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

const { take, map, reduce, filter } = rxjs.operators;

keys = rxjs
    .fromEvent( window, 'keypress' )
    .pipe(
        map( e => {
            console.log( 'e.key', e.key );
            return Number.parseInt( e.key, 10 );
        } ),
        filter( value => !Number.isNaN( value ) ),
        map( value => {
            console.log( 'filtered value', value );
            return value;
        } ),
        take( 5 ),
        reduce( ( acc, x ) => acc + x, 0 )
    ).subscribe( message => console.log( 'sum', message ) );
