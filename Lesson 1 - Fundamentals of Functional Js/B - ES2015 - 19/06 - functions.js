const addOne = num => num + 1;
console.log( 'addOne( 5 )', addOne( 5 ) );

const add2 = ( num1, num2 ) => num1 + num2;
console.log( 'add2( 1, 5 )', add2( 1, 5 ) );

const add = (...num) => num.reduce( add2, 0 );
console.log( 'add( 1, 2, 3, 4, 5 )', add( 1, 2, 3, 4, 5 ) );
