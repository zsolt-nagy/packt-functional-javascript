let fridge = Object.defineProperty(
    {},
    'fries',
    {
        value: 1,
        enumerable: true
    }
);

fridge.fries = 2;
console.log( 'fridge.fries', fridge.fries );

fridge.chicken = 3;
console.log( 'fridge after adding chicken', fridge );

Object.freeze( fridge );
fridge.chicken = 1;
fridge.pasta = 1;
console.log( 'frozen fridge', fridge );
