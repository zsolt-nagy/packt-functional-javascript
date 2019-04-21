// 1. map, reduce, filter
console.log(
  [ 'Functional', 'programming', 'is', 'cool' ]
      .map( word => word.length )
      .filter( num => num % 2 === 0 )
      .reduce( (a, b) => a + b, 0 )
);

// 2. chaining by returning this
// Warning: this is an OO example
const elevator = {
    floor: 5,
    up() {
        this.floor += 1;
        return this;
    }
    down() {
        this.floor -= 1;
        return this;
    }
}

// up( down( up( up( elevator ) ) ) ).floor
elevator
    .up()
    .up()
    .down()
    .up()
    .floor;


// 3. Function composition and sequencing
const elevator = {
    floor: 5
};
const up = elevator => {
    return {
        floor: elevator.floor + 1
    };
};
const down = elevator => {
    return {
        floor: elevator.floor - 1
    };
};

const sequence2 = ( f1, f2 ) =>
    ( ...args ) =>
    f2( f1( ...args ) );

const sequence = ( f1, ...fRest ) =>
    fRest.reduce( sequence2, f1 );

const move = sequence( up, up, down, up );
const newElevator = move( elevator );
