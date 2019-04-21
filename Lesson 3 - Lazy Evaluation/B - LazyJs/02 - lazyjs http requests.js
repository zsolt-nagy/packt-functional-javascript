// Run this code inside the developer tools of http://danieltao.com/lazy.js/
// or include https://github.com/dtao/lazy.js/blob/master/lazy.browser.js


Lazy.makeHttpRequest( 'https://api.github.com/users/facebook/repos' )
    .lines()
    .take( 10 )
    .each( line => console.log( line ) );


let response = '';

const onFulfilled = () => console.log( JSON.parse( response ) );

Lazy.makeHttpRequest( 'https://api.github.com/users/facebook/repos' )
    .lines()
    .each( line => {
    response += line;
} ).then( onFulfilled );

console.log( response );
