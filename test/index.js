'use strict';

require('should');

var Bitso = require('../bitso.js');

if (!process.env.BITSO_API_KEY) throw new Error('You must specify a BITSO_API_KEY environment variable to run tests');
if (!process.env.BITSO_API_SECRET) throw new Error('You must specify a BITSO_API_SECRET environment variable to run tests');
if (!process.env.BITSO_API_CLIENTID) throw new Error('You must specify a BITSO_API_CLIENTID environment variable to run tests');

var bitso = new Bitso(
  process.env.BITSO_API_KEY,
  process.env.BITSO_API_SECRET,
  process.env.BITSO_API_CLIENTID
);
describe('Bitso public unit tests', function() {
  this.timeout(10000); 
  describe('bitso.ticker', function () {
    it('should return ticker info', function (done) {
      bitso.ticker(function (err, data) {
        // console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        data.should.have.property('ask');
        done();
      });
    });
  });
  describe('bitso.order_book', function () {
    it('should return order book', function (done) {
      bitso.order_book(function (err, data) {
        // console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        data.should.have.property('asks');
        done();
      });
    });
  });
  describe('bitso.transactions', function () {
    it('should return transactions', function (done) {
      bitso.transactions(function (err, data) {
        // console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        
        done();
      });
    });
  });
});
describe('Bitso private unit tests', function() {
  this.timeout(10000); 
  describe('bitso.balance', function () {
    it('should return balance', function (done) {
      bitso.balance(function (err, data) {
         // console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        data.should.have.property('mxn_balance');
        done();
      });
    });
  });
  describe('bitso.user_transactions', function () {
    it('should return user transactions', function (done) {
      bitso.user_transactions(function (err, data) {
        console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        
        done();
      });
    });
  });
  describe('bitso.open_orders', function () {
    it('should return open orders', function (done) {
      bitso.open_orders(function (err, data) {
        // console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        
        done();
      });
    });
  });
  describe.skip('bitso.cancel_order', function () {
    it('should cancel an order', function (done) {
      var id = process.env.BITSO_ORDER_ID;
      if (!id) return done('You need to specify BITSO_ORDER_ID for this test');
  
      bitso.open_orders(function (err, data) {
        // console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        
        done();
      });
    });
  });
  describe('bitso.lookup_order', function () {
    it('should return lookup order', function (done) {
      var id = process.env.BITSO_ORDER_ID;
      if (!id) return done('You need to specify BITSO_ORDER_ID for this test');
      bitso.lookup_order(id, function (err, data) {
        // console.log('data: ' + JSON.stringify(data));
        if (err) return done(err);
        
        done();
      });
    });
  });
 

  /*
   *
   *      WARNING : THESE TESTS WILL SELL OR BUY REAL BTC, 
   *                THOSE TESTS ARE SKIPPED BY DEFAULT
   *
   */
  // describe.skip('bitso.trade', function () {
  //   it('should return sell btc for CNY', function (done) {
  //     bitso.trade('btc_cny','sell_market',null,0.01, function (err, data) {
  //       if (err) return done(err);
  //       data.should.have.property('order_id');
  //       done();
  //     });
  //   });
  // });
});