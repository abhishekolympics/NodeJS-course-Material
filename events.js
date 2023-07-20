const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe 
celebrity.on('race', function(result) {
    if(result === 'win')
    console.log("Congratulations! You are the best!");
});

// Subscribe 
celebrity.on('race', function(result) {
    if(result === 'win')
    console.log("Boo I could have done better than that!");
});

process.on('exit', (code) => {
    console.log("Process exit event with code: ", code);
});

celebrity.emit('race','win');
celebrity.emit('race', 'lost');