// Pyramid of Doom
setTimeout( function() {
    console.log( 'Step 1' );
    setTimeout( function() {
        console.log( 'Step 2' );
        setTimeout( function() {
            console.log( 'Step 3' );
            setTimeout( function() {
                console.log( 'Step 4' );
            }, 1000 );
        }, 1000 );
    }, 1000 );
}, 1000 );



// Linearization with generators
const delayMessagePromise = ( message, delay ) =>
    new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console.log( message );
            resolve( true );
        }, delay );
    } );

const linearizedSteps = function *() {
    yield delayMessagePromise( 'Step 1', 1000 );
    yield delayMessagePromise( 'Step 2', 1000 );
    yield delayMessagePromise( 'Step 3', 1000 );
    yield delayMessagePromise( 'Step 4', 1000 );
}

const asyncIterator = linearizedSteps();

asyncIterator.next().value
    .then( () => asyncIterator.next().value )
    .then( () => asyncIterator.next().value )
    .then( () => asyncIterator.next().value );
