var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')

var AccountContainer = React.createClass({

  

  render: function(){
    

    return(
      <div>
        <h1>Current Stock Info</h1>
        <h2>Total Value of Stock:  £{this.props.value}</h2>
      
      </div>
    )
}
});

module.exports = AccountContainer;