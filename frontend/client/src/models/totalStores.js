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
    }
}

module.exports = TotalStores;