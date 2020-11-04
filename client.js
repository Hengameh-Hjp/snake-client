const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
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
