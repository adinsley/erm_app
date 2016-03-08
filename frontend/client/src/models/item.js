var Item = function(name, location, price, end_level, store_type, quantity, quantity_type, best_before){
  this.name = name;
  this.location = location;
  this.price = price;
  this.end_level = end_level;
  this.store_type = store_type;
  this.quantity = quantity;
  this.quantity_type = quantity_type;
  this.best_before = best_before;
  
};

Item.prototype = {
  

  

}


module.exports = Item;
