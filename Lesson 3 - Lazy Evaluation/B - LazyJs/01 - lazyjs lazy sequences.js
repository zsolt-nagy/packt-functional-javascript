// Run this code inside the developer tools of http://danieltao.com/lazy.js/
// or include https://github.com/dtao/lazy.js/blob/master/lazy.browser.js

console.log( Lazy( [1, 2, 3, 4] ).take( 2 ).value() );
console.log( Lazy( 'sequence of characters' ).take( 11 ).value() );

Lazy( [1,2,3] ).map( x => {
    console.log( 'map', x );
    return 2*x;
} ).filter( x => {
    console.log( 'filter', x );
    return x > 3;
} ).first();
