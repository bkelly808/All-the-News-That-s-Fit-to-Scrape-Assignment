// Dependencies
let express = require("express");
let path = require("path");
let mongoose = require("mongoose");
let axios = require("axios");
let cheerio = require("cheerio");

// Setting up the Express App
let app = express();
let PORT = process.env.PORT || 3005;