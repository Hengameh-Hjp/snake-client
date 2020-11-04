/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
    if (key === 'i'){
      conn.write('Move: up')
    } else if (key == 'l'){
      conn.write('Move: right')
    }else if (key == 'j'){
      conn.write('Move: left')
    }else if (key == 'k'){
      conn.write('Move: down')
    }
  });
  return stdin;
}

const handleUserInput = function(key){
  if (key === '\u0003'){
    process.exit()
  }
}

module.exports = setupInput;