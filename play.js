
const setupInput = require('./input');
const { connect } = require('./client');

conn = connect()
setupInput(conn)

// play.js
console.log('Connecting ...');
