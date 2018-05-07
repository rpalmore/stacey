const compression = require('compression');
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(compression());
app.use(express.static("./public"));


//------------------Determine Connection------------------//

// if (port === 5000) {
//     var keys = require("./keys.js");
// } else {
//     var keys = process.env
// };

// let transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         type: 'OAuth2',
//         user: keys.user,
//         clientId: keys.clientID,
//         clientSecret: keys.clientSecret,
//         refreshToken: keys.refreshToken,
//     }
// });

// app.post('/api/sendemail', function(req, res) {
// 	var email = req.body.email;
//     var name = req.body.name;
//     var message = req.body.message;
//     var mailOptions = {
//         to: "rkpalmore@gmail.com",
//         subject: "Hey! Saw Your Website",
//         text: message,
//         html: "<b>Sender: </b>" + name + "<br> <b>Email: </b>" + email + "<p>" + "<hr />" + message + "</p>"
//     }
//     console.log("Message: " + message);
//     transporter.sendMail(mailOptions, function(error, response) {
//         if (error) {
//             console.log("ERROR: ", error);
//             res.end("error");
//         } else {
//             console.log("Message successfully sent from: ", email);
//             res.send("banana");
//         }
//     });
// });


//------------------Routing Started ----------------------//

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/pricing', function(req, res) {
    res.sendFile('pricing.html', { root: __dirname + "/public" });
});

app.get('/about', function(req, res) {
    res.sendFile('about.html', { root: __dirname + "/public"});
});

app.get('/faq', function(req, res) {
    res.sendFile('faq.html', { root: __dirname + "/public"});
});

// app.post("/sendemail", function(req, res) {
//     var mailOptions = {
//         to: "rkpalmore@gmail.com",
//         subject: "Hey! Saw Your Profile",
//         text: req.body.text,
//         html: "<b>Sender: </b>" + req.body.from + "<br> <b>Email: </b>" + req.body.address + "<p>" + "<hr />" + req.body.text + "</p>"
//     }
//     console.log("Message: " + mailOptions.text);
//     transporter.sendMail(mailOptions, function(error, response) {
//         if (error) {
//             console.log(error);
//             res.end("error");
//         } else {
//             console.log("Message successfully sent from: " + req.body.address);
//             res.send("banana");
//         }
//     });
// });

app.listen(port);
console.log(`Stacey listening on ${port}`);
console.log('NODE_ENV: '+ process.env.NODE_ENV);
