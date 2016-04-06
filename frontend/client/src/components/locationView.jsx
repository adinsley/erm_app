var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')
var Moment = require('moment')
var BestBefore = require('./bestBefore1.jsx')

var LocationView = React.createClass({
    getInitialState: function() {
      return {selectedLocation:null, selectedItems:null};
    },

    createOption:function(location){
      return <option value={location.name} key={location.id} >{location.name}, {location.store} </option>

    },

    handleLocationChange:function(e){
      e.preventDefault();
      this.setState({selectedLocation:e.target.value})
    },

    buildFoodTableRows:function(){
        var that = this
        var filteredStores = new TotalStores;
        filteredStores.items = this.props.items;
        var filteredItems = filteredStores.filterItemsByLocation(this.state.selectedLocation);

        
        if(filteredItems[0]){
          return filteredItems.map(function(item, index){
             return (
               <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{Moment(item.best_before).format("dddd, MMMM Do YYYY")}</td>
                  <td>{item.quantity} {item.quantity_type}</td>
                  <td>{item.onload_by}</td>
                  <td>{item.onload_day}</td>
                  <td>{item.onload_week}</td>
                  <td>{item.onload_year}</td>
                  
              </tr> 
               )
             })//End of the map
            }else{
              return (
               <tr>
                  <td>Non Items in this Location</td>
              </tr> 
              )
            }//End of if

    },

    render: function(){

      var filteredStores = new TotalStores;
      filteredStores.items = this.props.items;
      var filteredItems = filteredStores.filterItemsByLocation(this.state.selectedLocation);
  
      return(
        <div>
          <div id="locationSelect">
            <select id="locationDropdown" onChange={this.handleLocationChange}>
              <option>Select Location</option>
              {this.props.locations.map(this.createOption)}
            </select>
          </div>
          <div id="locationTable">
            <h2>Table Displaying Info on -- {this.state.selectedLocation}</h2>
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Item</th>
                  <th>Best Before</th>
                  <th>Quantity</th>
                  <th>Onloaded By</th>
                  <th>Onload Day</th>
                  <th>Onload Week</th>
                  <th>Onloaded Year</th>
                 </tr> 
              </thead>
              <tbody>
                  {this.buildFoodTableRows()}
              </tbody>
            </table>
           </div>
           <div id="bbd_button">
              <button id="bbd" onClick={this.handleBestBefore}>See Best Before Info</button>
           </div>
           <div id="bbdComponent">
                <BestBefore locationbbd={filteredItems}/>
           </div>

        </div>
      )
  }
  });

module.exports = LocationView;