// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

const { Observable } = rxjs;

const lamp = Observable.create( observer => {
    observer.next( 'red' );
    const delay = 5000 + Math.random() * 2000;
    setTimeout( () => {
        observer.next( 'green' );
        observer.complete();
    }, delay );
} );

const nextHandler = value => console.log( value );
const errorHandler = error => console.error( error );
const completionHandler = () => console.log( 'stream is closed' );

var lampSubscriber = lamp.subscribe(
    nextHandler,
    errorHandler,
    completionHandler
);
