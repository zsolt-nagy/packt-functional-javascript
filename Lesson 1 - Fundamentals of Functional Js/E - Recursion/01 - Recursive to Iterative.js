// 1. Factorial
const factorial = num =>
    num <= 1 ?
    1 :
    num * factorial( num - 1 );

const factorialIterative = num => {
    let result = 1;
    while ( num > 1 ) {
      result *= num;
      --num;
    }
    return result;
}

// 2. Tree traversal
const tree = {
    value: 5,
    left: null,
    right: {
        value: 8,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 11,
            left: null,
            right: null
        }
    }
}

const sumElements = tree =>
    tree === null ?
    0 :
    tree.value + sumElements( tree.left ) + sumElements( tree.right );

const iterativeSumElements = function( tree ) {
    let sumOfNodes = 0;
    let nodes = [ tree ];

    while ( nodes.length > 0 ) {
        const node = nodes.pop();
        if ( node != null ) {
            sumOfNodes += node.value;
            nodes.push( node.left );
            nodes.push( node.right );
        }
    }

    return sumOfNodes;
}
