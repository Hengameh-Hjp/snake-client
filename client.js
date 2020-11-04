const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Successfully connected to server ...');
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: H&M');
  });

  commands = ['up', 'left', 'up', 'left', 'up', 'right', 'down']
  conn.on('connect', () => {
    /*
    let index = 0
    for (let command of commands){
      index += 1
    setTimeout(() => {
      conn.write("Move: " + command);;
    }, 500*index);
    
  }*/
});

  return conn;
}

module.exports = {connect}
