require("dotenv").config();

var operand = process.argv[2];

if (operand === "movie-this") {

    var axios = require("axios");

    var nodeArgs = process.argv;

    var movieName = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        }
        else {
            movieName += nodeArgs[i];

        }
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    );
}
if (operand === "concert-this"){ 

    var axios = require("axios");

    var nodeArgs = process.argv;

    var artist = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            artist = artist + "+" + nodeArgs[i];
        }
        else {
            artist += nodeArgs[i];

        }
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(
        function (response) {
            console.log("Name: " + JSON.stringify(response.data[0].venue.name));
            // console.log("Location: " + response.Venue);
            console.log("Venue: " + JSON.stringify(response.data[0].venue.city));
            console.log("Date: " + JSON.stringify(response.data[0].datetime));
        }
    );
}
if (operand === "spotify-this-song"){ 
    var Spotify = require('node-spotify-api');
    var keys = require("./keys.js");
    // console.log(keys)
    var spotify = new Spotify(keys.spotify);

    var axios = require("axios");

    var nodeArgs = process.argv;

    var songName = "";

    for (var i = 3; i < nodeArgs.length; i++) {

        if (i > 3 && i < nodeArgs.length) {
            songName = songName + "+" + nodeArgs[i];
        }
        else {
            songName += nodeArgs[i];

        }
    }


    spotify.search({ type: 'track', query: songName }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    console.log("Artists: " + data.tracks.items[0].artists[0].name); 
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Preview Link: " + data.tracks.items[0].href);
    console.log("Album: " + JSON.stringify(data.tracks.items[0].album.name));
    });
}

if (operand === "do-what-it-says") {
var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  data = process.argv[3]

});

}

