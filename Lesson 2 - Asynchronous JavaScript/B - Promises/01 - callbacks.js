// This code example requires jQuery to run
// This example demonstrates time travel back to 2009-2010 standards of writing
// spaghetti code.

$( 'body' ).html( `
    <input type="text" class="js-book-title"></input>
    <button class="js-get-books">Get Data</button>
    <ul class="js-search-results"></ul>
    <h3>Preview:</h3>
    <div class="book-img-preview"></div>`
);

$( '.js-get-books' ).click( () => {
    const title = encodeURIComponent( $( '.js-book-title' ).val() );
    $.get(`https://www.googleapis.com/books/v1/volumes?q=${title}`, resp => {
        console.log( resp );
        const items = resp.items.map( book => `
            <li data-thumbnail="${ book.volumeInfo.imageLinks ?
                                   book.volumeInfo.imageLinks.thumbnail :
                                   '' }">
                ${ book.volumeInfo.title }
            </li>` ).join( '\n' );
        $( '.js-search-results' ).html( items );
        $( '.js-search-results li' ).click( event => {
            const src = $( event.target ).attr( 'data-thumbnail' );
            $( '.book-img-preview' ).html( `
                <img src="${ src }" />
            ` );
        } );
    } );
} );
