// 1. Shallow cloning arrays
// View this code segment on pythontutor.com
const cloneArray = arr => [...arr];

const originalArray = [ 'hi', { on: true } ];
const newArray = cloneArray( originalArray );

newArray[0] = 'hello';
newArray[1].on = false;

// Object.assign
Object.assign( target, ...source );
let target = { className: 'js-container' };
let source = { tagName: 'div' };
let combinedObject = Object.assign( target, source );

// 2. Shallow cloning objects
const cloneObject = o => Object.assign( {}, o );
let clonedTarget = cloneObject( target );

// 3. Deep cloning
const deepClone = o => JSON.parse( JSON.stringify( o ) );
// const originalArray = [ 'hi', { on: true } ];
const newArray2 = deepClone( originalArray );
newArray2[0] = 'hello';
newArray2[1].on = false;

// 4. Cloning infinite structures
let o = {};
o.o = o;

deepClone( o );
