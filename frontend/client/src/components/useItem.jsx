var React = require('react');
var moment = require('moment')
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')


var UseItem = React.createClass({
  getInitialState: function() {
    return {selectedLocation:null};
  },

  createLocationOptions:function(location){
    return <option id={location.id} value={location.name}>{location.name}</option>
  },

  handleLocationChange:function(e){
    e.preventDefault();
    console.log(e.target.value)
    this.setState({selectedLocation:e.target.value})
  },
  
  
  render: function(){
    var totalStores = new TotalStores;
    totalStores.items = this.props.items;
    var filteredItems = totalStores.filterItemsByLocation(this.state.selectedLocation)
    console.log(totalStores)
    return(
      <div>
        <h1>Hello from the use Item Component</h1>
        <select onChange={this.handleLocationChange}>
          {this.props.locations.map(this.createLocationOptions)}
        </select>
      </div>
    )
}
});

module.exports = UseItem;