var Item = require('../item.js');
var assert = require('assert');
var chai = require('chai')
var expect = require('chai').expect

describe('Item Model', function(){
  // (id, name, location, price, end_level, store_type, quantity, quantity_type, best_before, onload_by, onload_year, onload_week, onload_day, offload_by, offload_year, offload_week, offload_day)
  beforeEach(function(){
    console.log("Create new share....");
    item1 = new Item(1, "Baked Beans", "Deck 1", 4, 2, "Dry", 4, "Kg", new Date("01-01-2001"), "Andrew Insley", "2016", "23", "Thursday", null, null, null, null);
  });
  // 1. Testing the Share Constructor
  it('Constructor working correctly', function(){
    console.log(item1.best_before)
    assert.equal(1, item1.id);
    assert.equal("Andrew Insley", item1.onload_by);
    assert.equal(null, item1.offload_by);
    expect(item1.best_before).to.be.a('date')
  });
  // // 2. Change the share price
  // it('share price should now equal inputted price', function(){
  //   share1.newPrice(200);
  //   assert.equal(200, share1.price);
  // });
  // // 3. Add to the last close of day price
  // it('Should add the current share price to the end of day array', function(){
  //   share1.closingDayRecord('01 Jan, 16');
  //   assert.deepEqual({"date": 'Jan 1st 16' , "price":400}, share1.closingPrice[0]);
  //   share1.newPrice(200);
  //   share1.closingDayRecord('02 Jan, 16');
  //   assert.deepEqual({"date": "Jan 2nd 16", "price": 200}, share1.closingPrice[1]);
  // })
  // //4. Can compare current price to a final day price in the past
  // it('Should be able to calculate percentage change between current price and a historical price', function(){
  //   share1.closingDayRecord('01 Jan, 16');
  //   share1.newPrice(200);
  //   assert.equal(-50, share1.compareCurrentTo('Jan 1st 16'));
  // });
});