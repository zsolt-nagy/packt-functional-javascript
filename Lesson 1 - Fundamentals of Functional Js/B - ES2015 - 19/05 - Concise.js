let entertain = 'Entertain';
let you = 'You';

// let me = {
//    entertain: entertain,
//    you: you
// }

// Concise notation:
let me = { entertain, you };

let me = {
    entertain,
    you,
    toString() { return `
        Let
        me
        ${this.entertain}
        ${this.you}`;
    }
};
