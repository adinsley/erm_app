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
    this.setState({selectedLocation: e.target.value});
  },

  handleButtonClick:function(e){
    e.preventDefault();
    var id = e.target.value;
    var user = this.props.user.trim();
    var year = this.props.year;
    var week = this.props.week;
    var day = this.props.day;
    this.props.useItem({offload_by:user, offload_year:year, offload_week:week, offload_day:day}, id)
  },

  createItemRows:function(){
    var that = this
    var totalStores = new TotalStores;
    totalStores.items = this.props.items;
    var filteredItems = totalStores.filterItemsByLocation(this.state.selectedLocation)
   
    if(filteredItems[0]){
      return filteredItems.map(function(item, index){
         return (
           <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.store}</td>
              <td>{item.price}</td>
              <td><button id={item.id} value={item.id} onClick={that.handleButtonClick}>Use Item</button></td>
          </tr> 
           )
         })//End of the map
        }else{
          return (
           <tr>
              <td>Location Empty</td>
          </tr> 
          )
        }//End of if

    },//End of function
    


  
  
  render: function(){
    
    return(
      <div>
        <h4>This section is replicating the function of a scanner when food is used</h4>
        <select onChange={this.handleLocationChange}>
          <option>Select Store</option>
          {this.props.locations.map(this.createLocationOptions)}
        </select>

        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Item Name</th>
              <th>Item Type</th>
              <th>Cost</th>
              <th>Use</th>
             </tr> 
          </thead>
          <tbody>
            {this.createItemRows()}
          </tbody>
        </table>
      </div>
    )
}
});

module.exports = UseItem;