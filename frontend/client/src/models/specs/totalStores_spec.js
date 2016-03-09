var TotalStores = require('../totalStores')
var Item = require('../item.js');
var assert = require('assert');
var chai = require('chai')
var expect = require('chai').expect

describe('totalStores Model', function(){
  // (id, name, location, price, end_level, store_type, quantity, quantity_type, best_before, onload_by, onload_year, onload_week, onload_day, offload_by, offload_year, offload_week, offload_day)
  beforeEach(function(){
    totalStores1 = new TotalStores
    item1 = new Item(1, "Baked Beans", "Deck 1", 4, 2, "Dry", 4, "Kg", new Date("01-01-2001"), "Andrew Insley", "2016", "23", "Thursday", null, null, null, null);
    item2 = new Item(2, "BeefBurgars", "Deck 2", 10, 4, "Fresh", 4, "Kg", new Date("01-01-2001"), "Andrew Insley", "2016", "23", "Thursday", null, null, null, null);
    item3 = new Item(2, "Sausages", "Deck 2", 12, 20, "Frozen", 4, "Kg", new Date("01-01-2001"), "Andrew Insley", "2016", "23", "Thursday", "Cora Insley", null, null, null);



  });
  // 1. Testing the totalstores Constructor
  it('Constructor working correctly expect items to be empty', function(){

    expect(totalStores1.items).to.have.length(0);
  });
  // 2. Add items to the items Array
  it('should be able to add an item to totalStore.item using additem function and for item to be able to access item', function(){
      totalStores1.addItem(item1);
      expect(totalStores1.items).to.have.length(1);
      expect(totalStores1.items[0].name).to.equal("Baked Beans");
      
   });
  // 3. Can filter items by location
  it('Should by able to filter items by Location using the filterByLocation method', function(){
      totalStores1.addItem(item1);
      totalStores1.addItem(item2);
      expect(totalStores1.items).to.have.length(2);
      expect(totalStores1.filterItemsByLocation("Deck 1")).to.have.length(1);
      expect(totalStores1.filterItemsByLocation("Deck 1")[0].name).to.equal("Baked Beans");
      expect(totalStores1.filterItemsByLocation("Deck 2")).to.have.length(1);
      expect(totalStores1.filterItemsByLocation("Deck 2")[0].name).to.equal("BeefBurgars");

  
   })
  //4. Can use Offload status to sort into live and use items
    it('Can use the liveItems method to sort only items that have not been offloaded', function(){
      totalStores1.addItem(item1);
      totalStores1.addItem(item2);
      totalStores1.addItem(item3);
      expect(totalStores1.items).to.have.length(3);
      expect(totalStores1.liveItems()).to.have.length(2);
      expect(totalStores1.liveItems()[0].name).to.equal("Baked Beans");
      expect(totalStores1.liveItems()[0].offload_by).to.equal(null);
      expect(totalStores1.liveItems()[1].offload_by).to.equal(null);
  });
//. Can use offload status to sort into live and used items
it('Can use the usedItems method to sort only items that have been offloaded', function(){
  totalStores1.addItem(item1);
  totalStores1.addItem(item2);
  totalStores1.addItem(item3);
  expect(totalStores1.items).to.have.length(3);
  expect(totalStores1.usedItems()).to.have.length(1);
  expect(totalStores1.usedItems()[0].name).to.equal("Sausages");
  expect(totalStores1.usedItems()[0].offload_by).to.equal("Cora Insley");
});
// Can calculate Total Value
  it('Can calculate value of all items', function(){
    totalStores1.addItem(item1);
    expect(totalStores1.totalValue()).to.equal(4);
    totalStores1.addItem(item2);
    expect(totalStores1.totalValue()).to.equal(14);
  });
// Can calculate the amount of days of food left determined by crew
  it('Can calculate amount of days left at sea given crew', function(){
    totalStores1.addItem(item1);
    crew = 2
    expect(totalStores1.totalEndurance(crew)).to.equal(1);
    totalStores1.addItem(item2);
    expect(totalStores1.totalEndurance(crew)).to.equal(3);
  });
//Can create data about the types of objects in the items.
it('we can access data based on the type of food', function(){
  totalStores1.addItem(item1);
  expect(totalStores1.itemByTypeInfo()[0].price).to.equal(4);
  expect(totalStores1.itemByTypeInfo()[0].end_level).to.equal(2);
  totalStores1.addItem(item2);
  expect(totalStores1.itemByTypeInfo()[1].name).to.equal("Fresh");
  expect(totalStores1.itemByTypeInfo()[1].price).to.equal(10);
  expect(totalStores1.itemByTypeInfo()[1].end_level).to.equal(4);
  totalStores1.addItem(item3);
  expect(totalStores1.itemByTypeInfo()[2].name).to.equal("Frozen");
  expect(totalStores1.itemByTypeInfo()[2].price).to.equal(12);
  expect(totalStores1.itemByTypeInfo()[2].end_level).to.equal(20);
});

//Can I filter items by Food.
it('we can filter data by Food', function(){
  expect(totalStores1.filterItemsByFood("banana")).to.have.length(0);
  totalStores1.addItem(item1);
  expect(totalStores1.filterItemsByFood("banana")).to.have.length(0);
  expect(totalStores1.filterItemsByFood("Baked Beans")).to.have.length(1);
  expect(totalStores1.filterItemsByFood("Baked Beans")[0].price).to.equal(4);

});
});