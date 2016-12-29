var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var LOG = require('log4js').getLogger('SERVER');

var PORT = process.env.APPLICATION_PORT || 8200;
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'app')));

app.listen(PORT, function () {
    LOG.debug('Listening on port: ' + PORT);
});

app.get('/', express.static(path.join(__dirname, 'app/index.html')));

app.get('/isAlive', require('express-healthcheck')({
    healthy: function () {
        return true;
    }
}));

//TODO retrieve ticketId from DB.
//Send success if ticketId is in the DB. Record timestamp and username.
//Send error if ticketId is not found or already scanned.
//Approve ticketId if it matches the mass produced ticket id.
app.post('/scan/username/:username/ticketId/:ticketId/', function (req, res) {
    LOG.debug('Request: %s', req.url);

    var ticketId = req.params.ticketId;
    var login = req.params.login;

    var responseBody = {
        ticketId: ticketId,
        name: 'No Name Found',
        status: 'INVALID TICKET ID'
    };

    res.send(responseBody);
});
