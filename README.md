# Bitso API Client

bitso-api is a simple wrapper for communicating with Bitso in Node.JS.
This library is a fork from Bitstamp API as bitso is fully compatible with Bitstamp API

## Installation

    npm install bitso-api

## Usage

    var Bitso = require('bitso-api');
    var api = new Bitso();

    api.transactions({time: 'minute'}, function(err, result) {
      if(!err) {
        console.log(result);
      } else {
        console.log(err);
      }
    });

## Dependencies

- underscore
- request

## FAQ


