#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error fetching movie data:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Error fetching movie data:', response.statusCode);
    return;
  }

  const movieData = JSON.parse(body);
  console.log(`Characters of "${movieData.title}":`);

  movieData.characters.forEach((characterUrl) => {
    request(characterUrl, function (charError, charResponse, charBody) {
      if (charError) {
        console.error('Error fetching character data:', charError);
        return;
      }

      if (charResponse.statusCode !== 200) {
        console.error('Error fetching character data:', charResponse.statusCode);
        return;
      }

      const characterData = JSON.parse(charBody);
      console.log(characterData.name);
    });
  });
});
