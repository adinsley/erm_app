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
      return value
    },

    filterItemsByLocation:function(location){
      var filteredItems = this.items.filter(function(item){
        if(item.location == location){
          return item
        }
      })
      return filteredItems
    },

    liveItems:function(){
      var liveItems = this.items.filter(function(item){
        if(item.offload_by == null){
          return item
        }
      })
      return liveItems
    },

    usedItems:function(){
      var usedItems = this.items.filter(function(item){
        if(item.offload_by != null){
           return item
        }
      })
      return usedItems
    }
     

}

module.exports = TotalStores;