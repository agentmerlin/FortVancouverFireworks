var express = require('express');
var bodyParser = require('body-parser');
var LOG = require('log4js').getLogger('SERVER');

var PORT = process.env.APPLICATION_PORT || 8200;
var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use('/isAlive', require('express-healthcheck')({
  healthy: function () {
    return true;
  }
}));

app.listen(PORT, function() {
  LOG.debug('Listening on port: ' + PORT);
});

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
	//TODO make sql query
});
