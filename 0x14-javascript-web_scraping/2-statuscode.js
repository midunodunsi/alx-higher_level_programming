#!/usr/bin/node

const request = require('request');

// Check if a URL is provided as a command-line argument
if (process.argv.length < 3) {
  console.error('Usage: ./3-starwars_title.js <URL>');
  process.exit(1);
}

// Perform an HTTP GET request to the URL provided as a command-line argument
request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  // Log the HTTP status code of the response to the console
  console.log(`code: ${response.statusCode}`);
});
