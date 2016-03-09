var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')
var Moment = require('moment')

var FoodView = React.createClass({
    getInitialState: function() {
      return {selectedFood:null};
    },

    createOption:function(food){
      return <option value={food.name} key={food.name} >{food.name}</option>

    },

    handleFoodChange:function(e){
      e.preventDefault();
      this.setState({selectedFood: e.target.value})

    },

    buildFoodTableRows:function(){
        var that = this
        var filteredStores = new TotalStores;
        filteredStores.items = this.props.items;
        var filteredItems = filteredStores.filterItemsByFood(this.state.selectedFood);
        
        if(filteredItems[0]){
          return filteredItems.map(function(item, index){
             return (
               <tr>
                  <td>{index + 1}</td>
                  <td>{item.location}</td>
                  <td>{Moment(item.best_before).format("dddd, MMMM Do YYYY")}</td>
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
                  <td>Non of that Type Loaded</td>
              </tr> 
              )
            }//End of if

    },
  

    render: function(){
  
      return(
        <div>
         
          <div id="foodSelect">
            <select id="foodDropdown" onChange={this.handleFoodChange}>
              <option>Select Food</option>
              {this.props.foods.map(this.createOption)}
            </select>
          </div>
          <div id="tableByFood">
         
            <h2>Table Displaying Info on -- {this.state.selectedFood}</h2>
            
          
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Location</th>
                  <th>Best Before</th>
                  <th>Onload By</th>
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
          
        </div>
      )
  }
  });

module.exports = FoodView;