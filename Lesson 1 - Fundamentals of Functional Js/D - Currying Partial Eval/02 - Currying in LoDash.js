const prod = (a,b,c) => a*b*c;

const prodCurried = _.curry( prod );

console.log( prodCurried( 2 )( 3 )( 4 ) );
console.log( prodCurried( 2, 3 )( 4 ) );
console.log( prodCurried( _, _, 4 )( _, 3 )( 2 ) );
