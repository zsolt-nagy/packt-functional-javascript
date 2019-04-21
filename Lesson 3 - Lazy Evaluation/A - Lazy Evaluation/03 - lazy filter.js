const lazyFilter = function *( iterable, filterFunction ) {
    for ( let elem of iterable ) {
        if ( filterFunction( elem ) ) yield elem;
    }
}

const lazySequence = lazyFilter( [1, 2, 3, 4, 5], x => x%2 === 0 );


const lazyMap = function *( iterable, mapFunction ) {
    for ( let elem of iterable ) {
        yield mapFunction( elem );
    }
}

const names = [ 'takeshi', 'akari', 'hiroe', 'miyabi' ];
const capitalize = name =>
    name[0].toUpperCase() + name.slice( 1 );
const isFiveOrLessCharsLong = name => name.length <= 5;

const mapIterator = lazyMap( names, capitalize );
const filterIterator = lazyFilter( mapIterator, isFiveOrLessCharsLong );

console.log( [...filterIterator] );
