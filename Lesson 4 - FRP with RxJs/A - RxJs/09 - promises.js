// You need RxJs to execute this code.
// https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.4.0/rxjs.umd.js
// Example sandbox: codepen.io

const promise = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( 'axios.get("http://zsoltnagy.eu/endpoint")' ), 1000 );
} );

rxjs.from( promise ).subscribe( console.log );
