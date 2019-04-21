// header and status information
fetch('http://jsonplaceholder.typicode.com/users')
    .then( console.log );

// accessing the payload
fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then( console.log );
