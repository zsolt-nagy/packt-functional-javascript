// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

const { Observable } = rxjs;

var source = Observable.create( observer => {
    observer.next( 1 );
    observer.complete();
} );

const nextHandler = value => console.log( value );
const errorHandler = error => console.error( error );
const completionHandler = () => console.log( 'stream is closed' );

var subscriber = source.subscribe(
    nextHandler,
    errorHandler,
    completionHandler
);
