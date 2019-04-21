const f = (a, b) => a * b;
const fCurried = a => b => a * b;
const mul2 = fCurried( 2 );

console.log( 'f( 2, 3 )', f( 2, 3 ) );
console.log( 'fCurried( 2 )( 3 )', fCurried( 2 )( 3 ) );
console.log( 'mul2( 3 )', mul2( 3 ) );
