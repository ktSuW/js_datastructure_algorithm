'use Strict';
//Write HTTP GET method to retrieve information from a movie database
// https://github.com/kabalane/MovieTitleGetWebRequest
// https://gist.github.com/karthikeyana/948dd7213cbc89083d414ac9afbc6c96
/**
 * Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
 * require() : Include the http module 
 * e.g. const http = require('http');
 * //-----------------------------------------
 * setEncoding : Alters the encoding character data stored inside a readable stream. It comes as part of the stream module.
 * - this function takes only one parameter : encoding - a string that denotes the encoding in which the programmer wishes to interpret the data stored in a readable stream.
 * - Most common character encoding(s) supported by Node.js are
 * - hex, base64, ucs2, ascii, latin1, utf8
 * - Return value is string that contains data read from a readable stream in the encoding specified by the programmer.
 * By changing character encodings, programmers can use the setEncoding method to interpret the same piece of data in multiple ways
 * e.g. response.setEncoding('utf8')
 * 
 * //-----------------------------------------
 * https.get()
 * - Get is used to request data from a specific resource.
 * Parameters
 *  - url, string
 *  - options => Object, string, url
 *  - callback function 
 * //-------------------------------------------
 * JSON.parse() : parse the data with JSON.parse(), and then the data becomes JS object
 * References
 * ================================
 * 1. https://www.w3schools.com/nodejs/nodejs_filesystem.asp
 * 2. https://www.educative.io/edpresso/what-is-the-setencoding-function-in-nodejs
 * 3. 
 */
// include https module in the app
const https = require("https");
const log = console.log;

const getTotalPages = (url, callback) => {
  https
    .get(url, (res) => {
      let data = "";

      res.on("data", (chunk) => (data += chunk));

      res.on("end", () => {
        return callback(null, JSON.parse(data).total_pages);
      });
    })
    .on("error", (err) => {
      return callback(err, null);
    });
};

const getMovieTitlesHelper = (urls, callback) => {
  let titles = new Array();
  let counter = 1;

  urls.forEach((url) => {
    https
      .get(url, (res) => {
        let data = "";

        res.on("data", (chunk) => (data += chunk));

        res.on("end", () => {
          const movies = JSON.parse(data).data;

          movies.forEach((movie) => titles.push(movie.Title));

          if (counter === urls.length) {
            return callback(null, titles);
          }
          counter++;
        });
      })
      .on("error", (err) => {
        return callback(err, null);
      });
  });
};

/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
const getMovieTitles = (substr) => {
  if (substr === "") {
    return null;
  }

  const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;
  getTotalPages(url, (err, totalPages) => {
    if (err) {
      log("Error getting total number of available pages:", err);
    } else {
      const urls = new Array();
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        urls.push(`${url}&page=${pageNumber}`);
      }
      getMovieTitlesHelper(urls, (err, titles) => {
        if (err) {
          log("Error retrieving movies titles:", err);
        } else {
          titles.sort().forEach((title) => log(title));
        }
      });
    }
  });
};

getMovieTitles("green");