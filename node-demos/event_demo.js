const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event1', () => console.log('Event Fired1!'));
myEmitter.on('event1', () => console.log('Event Fired2!'));

// Init event
myEmitter.emit('event1');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
