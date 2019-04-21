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

// Linearization with async-await
const delayMessagePromise = ( message, delay ) =>
    new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            console.log( message );
            resolve( true );
        }, delay );
    } );

const asyncSequence = async function() {
    await delayMessagePromise( 'Step1', 1000 );
    await delayMessagePromise( 'Step2', 1000 );
    await delayMessagePromise( 'Step3', 1000 );
    await delayMessagePromise( 'Step4', 1000 );
}
