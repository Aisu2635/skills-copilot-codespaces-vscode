// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Create multer object
const upload = multer({
    dest: 'uploads/'
});

// Create body-parser object
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

