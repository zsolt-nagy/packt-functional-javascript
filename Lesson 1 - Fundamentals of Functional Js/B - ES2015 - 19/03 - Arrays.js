console.log( 'Array.isArray( [] )', Array.isArray( [] ) );
console.log( 'Array.isArray( {length:0} )', Array.isArray( {length:0} ) );

const arr = [1, 2, 3];

arr[1] = 99;  // elements can be changed

console.log( arr );

arr = [];   // error
