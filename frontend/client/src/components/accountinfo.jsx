var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')
var LocationView = require('./locationView.jsx')
var FoodView = require('./foodView.jsx')



var AccountInfo = React.createClass({
  getInitialState: function() {
    return {crewNumber:2, locationView:false, foodView:false};
  },

  handleCrewChange: function(e){
    e.preventDefault();
    this.setState({crewNumber: e.target.value})
  },

  handleFoodButton:function(e){
    e.preventDefault();
    console.log("inside handle food button")
    if(this.state.foodView == false){
      this.setState({foodView:true});
      this.setState({locationView:false});
    }else{
      this.setState({foodView:false});
    }
    
   
    
  },

  handleLocationButton:function(e){
    e.preventDefault();
    console.log("inside handle location button")
    if(this.state.locationView == false){
      this.setState({locationView:true});
      this.setState({foodView:false});
    }else{
      this.setState({locationView:false});
    }
  },

  createTypeRows:function(){
    var that = this
    var liveStores = new TotalStores
    liveStores.items = this.props.liveItems;
    var typeArray = liveStores.itemByTypeInfo();
    return typeArray.map(function(object){
       return (
         <tr>
            <td>{object.name}</td>
            <td>£{object.price}</td>
            <td>{(Math.floor(object.end_level/that.state.crewNumber)+1)} Days</td>
        </tr> 
         )
       })//End of the map
  },
  

  render: function(){
    
    var usedStores = new TotalStores;
    usedStores.items = this.props.usedItems;
    
    var liveStores = new TotalStores
    liveStores.items = this.props.liveItems;
    

    return(
      <div>

        

        <h1>Current Stock Info</h1>
        <form id="crewNumber">
          <label for="crewNumber" id="crewNumber">Enter current Crew Level:</label>
          <input name="crewNumber" type="number" value={this.state.crewNumber} onChange={this.handleCrewChange}/>
        </form>
        <h2>Total Value of onboard stores: £{liveStores.totalValue()}</h2>
        <h2>Total Endurance: {Math.floor(liveStores.totalEndurance(this.state.crewNumber))} Days </h2>
          <div id="enduranceTable">
            <table>
              <thead>
                <tr>
                  <th>Food Type</th>
                  <th>Value</th>
                  <th>Endurance</th>
                 </tr> 
              </thead>
              <tbody>
                {this.createTypeRows()}
              </tbody>
            </table>
          </div>
          <div id="inspectButtons">
            <button onClick={this.handleFoodButton}>See Items By Food</button>
            <button onClick={this.handleLocationButton}>See Items By Location</button>
          </div>
          <div id="locationFoodChildren" >
              {this.state.foodView ? <FoodView foods={this.props.foods} items={this.props.liveItems}/> : null}
              {this.state.locationView ? <LocationView locations={this.props.locations} items={this.props.liveItems}/> : null}
          </div>
      </div>
    )
}
});

module.exports = AccountInfo;