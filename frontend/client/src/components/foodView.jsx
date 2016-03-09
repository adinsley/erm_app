var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')

var FoodView = React.createClass({
    getInitialState: function() {
      return {selectedFood:null};
    },

    createOption:function(food){
      return <option value={food.name} key={food.name} >{food.name}</option>

    },

    handleFoodChange:function(e){
      e.preventDefault();
      console.log(e.target.value)
      this.setState({selectedFood: e.target.value})

    },
  

    render: function(){
  
      return(
        <div>
          <h1>Inside the foodView Component</h1>
          <div id="foodSelect">
            <select id="foodDropdown" onChange={this.handleFoodChange}>
              <option>Select Food</option>
              {this.props.foods.map(this.createOption)}
            </select>
          </div>
          <div id="tableByFood">
          </div>
          
        </div>
      )
  }
  });

module.exports = FoodView;