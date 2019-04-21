const [ head, ...tail ] = [ 1, 2, 3 ];
console.log( 'head, tail: ', head, tail );

let right = {
    first: 'Zsolt', 
    last: 'Nagy',
    chapters: [1, 2, 3]
};
var { first, chapters: [ , ...tail ]} = right;
console.log( 'first', first );
console.log( 'tail', tail );

console.log( '[ ...tail, ...tail ]', [ ...tail, ...tail ] );

const logArgs = (...rest) => console.log( rest );
logArgs( ...tail, ...tail, 5 );
