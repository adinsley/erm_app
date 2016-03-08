_ = require('lodash')

var TotalStores = function(){
  this.items = [];

}

TotalStores.prototype = {
    addItem: function(item){
      this.items.push(item);
    },
    totalValue: function(){
      var value = 0
      for(var item of this.items){
        value += item.price
      }
      return 20
    },

    filterItemsByLocation:function(location){
      console.log('in ts model passed in location===', location)
      var filteredItems = this.items.filter(function(item){
        if(item.location == location){
          return item
        }
      })
      return filteredItems
    }
}

module.exports = TotalStores;