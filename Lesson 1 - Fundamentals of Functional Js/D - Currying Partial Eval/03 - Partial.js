const volume = ( a, b, c ) => a * b * c;

curriedVolume = _.curry(volume)

console.log( curriedVolume(2)(3)(4) );
console.log( curriedVolume(_, _, 4)(2, 3) );

const partialVolume_2_3 = _.partial( volume, 2, 3 );

console.log( partialVolume_2_3( 4 ) );

// Implementing partial evaluation with bind:
const partial = ( f, ...args ) => f.bind( null, ...args );

// Implementing currying with bind:
const curry =
  f =>
  a =>
  f.length === 1 ?
  f( a ) :
  curry( partial(f, a) );

// Examples
console.log( curry( volume )( 2 )( 3 )( 4 ) );
console.log( partial( volume, 2, 3 )( 4 ) );
