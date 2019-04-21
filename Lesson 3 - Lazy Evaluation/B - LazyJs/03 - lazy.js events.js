// Run this code inside the developer tools of http://danieltao.com/lazy.js/
// or include https://github.com/dtao/lazy.js/blob/master/lazy.browser.js

Lazy( document.getElementsByTagName( 'h2' ) )
    .on( 'click' )
    .take( 5 )
    .each( event => console.log( 'Click:', event ) );
