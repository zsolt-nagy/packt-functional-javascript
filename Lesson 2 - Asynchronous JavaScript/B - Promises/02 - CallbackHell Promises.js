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

// Linearization with promises
const delayMessagePromise = ( message, delay ) =>
    new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console.log( message );
            resolve( true );
        }, delay );
    } );

delayMessagePromise( 'Step 1', 1000 )
    .then( () => delayMessagePromise( 'Step 2', 1000 ) )
    .then( () => delayMessagePromise( 'Step 3', 1000 ) )
    .then( () => delayMessagePromise( 'Step 4', 1000 ) );
