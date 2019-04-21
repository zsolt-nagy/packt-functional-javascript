const rectangleArea = function() {
    return this.width * this.height;
}
const rectangle = {
    width: 5,
    height: 4
}
console.log( 'area', rectangleArea.bind( rectangle )() );


const product = function( a, b ) {
    return a * b;
}

console.log( 'product( 2, 3 )', product( 2, 3 ) );
console.log( 'product.bind( null, 2 )( 3 )', product.bind( null, 2 )( 3 ) );
console.log( 'product.bind( null, 2, 3 )()', product.bind( null, 2, 3 )() );
