var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')
var AccountInfo = require('./accountinfo.jsx')
var AddItem = require('./addItem.jsx')



var MainContainer = React.createClass({
  getInitialState: function() {
    return {items: [], food: [], location:[], showAddItem:false};
  },

  
  fetchItems:function(){
    var request = new XMLHttpRequest();
      request.open("GET", this.props.url);
      request.onload = function(){
        if(request.status ==200){
          var receivedItems = JSON.parse(request.responseText)
          var totalStores = new TotalStores
          for(var item of receivedItems){
            var newItem = new Item(item.food.name, item.location.name, item.food.price, item.food.end_level, item.location.store_type, item.food.quantity, item.food.quantity_type, item.best_before)
            totalStores.items.push(newItem)
          }
         this.setState({items:totalStores.items, location:[], food:[]})
        }
      }.bind(this)
            

      request.send(null);
    
  },

  fetchFoods:function(){
    var request = new XMLHttpRequest();
      request.open("GET", "http://localhost:5050/foods");
      request.onload = function(){
        if(request.status ==200){
          var receivedFoods = JSON.parse(request.responseText);
          var foods = [];
          for(var food of receivedFoods){
           var newFood = {name:food.name, id:food.id, store:food.store}
           foods.push(newFood)
          }
          this.setState({food:foods})

          }
        }.bind(this)
      request.send(null);
  },

  fetchLocations:function(){
    var request = new XMLHttpRequest();
      request.open("GET", "http://localhost:5050/locations");
      request.onload = function(){
        if(request.status ==200){
          var receivedLocations = JSON.parse(request.responseText);
          var locations = [];
          for(var location of receivedLocations){
          var newLocation = {name:location.name, id:location.id, store:location.store_type}
          locations.push(newLocation)
          }
          // console.log(locations)
          this.setState({location:locations})

          }
        }.bind(this)
      request.send(null);
  },

  componentDidMount: function(){
    this.fetchItems();
    this.fetchFoods();
    this.fetchLocations();
  },

  addItemButton: function(e){
    var addButton = document.querySelector("#addItem")
    e.preventDefault()
    if(this.state.showAddItem == false){
       this.setState({showAddItem:true})
       addButton.innerText = "Hide Add Item Menu"
    }else{
      this.setState({showAddItem:false})
      addButton.innerText = "Show Add Item Menu"
    }
  },


  render: function(){
    
    return(
        <div id="MainContainer">
          <div id="welcome">
            <h1 id="welcome_title">Welcome to the Stores App</h1>
            <p id="welcome_blurb" >This App will allow you to track all of the items that exist in your organisation. You will be able to Add items on arrival and then track when it has been used. From this data you wil then be able to analysis your stock levels and see how you are utilising your stocks.</p>
          </div>
          <div id="session_input">
            <form "session_data_form">
              
            </form>
          </div>
          <div id="action_select">
          <h2 id="button Title">Please select Action</h2>
            <button id="addItem" onClick={this.addItemButton} value="Dogs">Add Item</button>
            <button>Use Item</button>
            <button>Analayis Current Stocks</button>
            <button>Build Order</button>
          </div>
          { this.state.showAddItem ? <AddItem foods={this.state.food} locations={this.state.location}/> : null }
        </div>
      )
              
  
  }

});

module.exports = MainContainer;