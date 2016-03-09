var Item = function(id, name, location, price, end_level, store_type, quantity, quantity_type, best_before, onload_by, onload_year, onload_week, onload_day, offload_by, offload_year, offload_week, offload_day){
  this.id = id;
  this.name = name;
  this.location = location;
  this.price = price;
  this.end_level = end_level;
  this.store_type = store_type;
  this.quantity = quantity;
  this.quantity_type = quantity_type;
  this.best_before = best_before;
  this.onload_by = onload_by;
  this.onload_year = onload_year;
  this.onload_week = onload_week;
  this.onload_day = onload_day;
  this.offload_by = offload_by;
  this.offload_year = offload_year;
  this.offload_week = offload_week;
  this.offload_day = offload_day;
  
};

Item.prototype = {
  

  

}


module.exports = Item;
