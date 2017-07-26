var program = require('commander');
var request = require('request');
var http = require('http');

program
  .version('0.0.1')
  .option('', 'Web page')
  .parse(process.argv);
  
const server = http.createServer(function (req, res) {
  console.log("**** Request to: " + program.args[0]);
  
  req.pipe(request(program.args[0])).pipe(res);
  
  // request(program.args[0], function (error, response, body) {
  //   console.log('error:', error); // Print the error if one occurred 
  //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  //   console.log('body:', body); // Print the HTML for the Google homepage. 
  // });
  
});

server.listen(9090);

