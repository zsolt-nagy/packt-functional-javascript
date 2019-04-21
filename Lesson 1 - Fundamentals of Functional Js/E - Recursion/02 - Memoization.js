const memo = f => {
    let memoMap = new Map();
    window.m = memoMap;

    return fArg =>
    memoMap.has( fArg ) ?
    memoMap.get( fArg ) :
    memoMap.set( fArg, f( fArg ) ).get( fArg );
}

let factorial = num =>
    num <= 1 ?
    1 :
    num * factorial( num - 1 );

factorial = memo( factorial );

factorial( 10 );
console.log( 'memoMap', window.m );
