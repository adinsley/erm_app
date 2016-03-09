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

    totalEndurance: function(crew){
      var endurance = 0
      for(var item of this.items){
        endurance += item.end_level
      }
     var days_left = endurance/crew
     return days_left
    },

    filterItemsByLocation:function(location){
      var filteredItems = this.items.filter(function(item){
        if(item.location == location){
          return item
        }
      })
      return filteredItems
    },

    filterItemsByFood:function(food){
      if(food != null){
          var filteredItems = this.items.filter(function(item){
            if(item.name == food){
              return item
            }
          })
          return filteredItems
      }else{
          return []
      }
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
    }, 

    itemByTypeInfo:function(){
      var info =[]
      var dryPrice = 0
      var dryEndurance = 0
      var freshPrice = 0
      var freshEndurance = 0
      var frozenPrice = 0
      var frozenEndurance = 0
      for(var item of this.items){
      if(item.store_type == "Dry"){
        dryPrice += item.price
        dryEndurance += item.end_level
      }else if(item.store_type == "Fresh"){
        freshPrice += item.price
        freshEndurance += item.end_level
      }else if(item.store_type == "Frozen"){
        frozenPrice += item.price
        frozenEndurance += item.end_level
      }
    }
      var dataObject = [{name:"Dry", price:dryPrice, end_level:dryEndurance}, {name:"Fresh", price:freshPrice, end_level:freshEndurance}, {name:"Frozen", price:frozenPrice, end_level:frozenEndurance}];
      return dataObject;
  }

     

}

module.exports = TotalStores;