const server = require('./server.js');

const PORT = process.env.PORT || 7777;

server.listen(PORT, () => {
  console.log(`\n\tListening on port ${PORT}...\n`);
});


// Hopefully it's working now, couldn't seem to get this pushed?