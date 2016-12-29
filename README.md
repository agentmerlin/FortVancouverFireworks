FortVancouverFireworks
======================

Website for the Fort Vancouver Fireworks event on Independence Day. The website will accept a login and includes a prompt for scanning tickets.

## Quick start

Make sure you have NodeJS and NPM installed and accessible through $PATH

#### Install the dependencies

From the project directory, run:

`npm install -g bower && npm install && bower install`

#### Start server locally

1. Run: `npm start`
2. Navigate to: [http://localhost:8200][1]

#### Run docker image

`docker run -p 80:8200 sproused/ticket-taker-express`

## Dependencies

* [NodeJS][NodeJS]
* [BowerJS][BowerJS]
* [Docker][Docker]

[NodeJS]: https://nodejs.org
[BowerJS]: https://bower.io
[Docker]: https://www.docker.com
[1]: http://localhost:8200
