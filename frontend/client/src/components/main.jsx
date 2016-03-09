var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')
var AccountInfo = require('./accountinfo.jsx')
var AddItem = require('./addItem.jsx')
var UseItem = require('./useItem.jsx')



var MainContainer = React.createClass({
  getInitialState: function() {
    return {items: [], food: [], location:[], user:null, year:"2016", week:"1", day:"Monday", showAddItem:false, showUseItem:false, showAnalyis:false};
  },

  // Loading the data from the API
  fetchItems:function(){
    var request = new XMLHttpRequest();
      request.open("GET", this.props.url);
      request.onload = function(){
        if(request.status ==200){
          var receivedItems = JSON.parse(request.responseText)
          var totalStores = new TotalStores
          for(var item of receivedItems){
            var newItem = new Item(item.id, item.food.name, item.location.name, item.food.price, item.food.end_level, item.location.store_type, item.food.quantity, item.food.quantity_type, new Date(item.best_before), item.onload_by, item.onload_year, item.onload_week, item.onload_day, item.offload_by, item.offload_year, item.offload_week, item.offload_day)
            totalStores.items.push(newItem)
          }
         this.setState({items:totalStores.items})
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
          this.setState({location:locations})

          }
        }.bind(this)
      request.send(null);
  },

  componentDidMount: function(){
    this.fetchItems();
    this.fetchFoods();
    this.fetchLocations();
    setInterval(this.fetchItems, 1000)
  },

  handleItemSubmit: function(item) {
    var request = new XMLHttpRequest();
    request.open("POST", this.props.url);
    request.setRequestHeader("Content-Type", 'application/json');
    request.onload = function(){
      if(request =200){
        var receivedItems = JSON.parse(request.responseText)
        var totalStores = new TotalStores
        for(var item of receivedItems){
            var newItem = new Item(item.food.name, item.location.name, item.food.price, item.food.end_level, item.location.store_type, item.food.quantity, item.food.quantity_type, item.best_before)
              totalStores.items.push(newItem)
         }
      }
      }.bind(this)
        request.send( JSON.stringify(item))
        
  },

  handleItemUse:function(item, id){
      var request = new XMLHttpRequest();
      request.open("PUT", this.props.url + "/"+ id);
      request.setRequestHeader("Content-Type", 'application/json');
      request.onload = function(){
        if(request =200){
          var receivedItems = JSON.parse(request.responseText)
          var totalStores = new TotalStores
          for(var item of receivedItems){
              var newItem = new Item(item.food.name, item.location.name, item.food.price, item.food.end_level, item.location.store_type, item.food.quantity, item.food.quantity_type, item.best_before)
                totalStores.items.push(newItem)
           }
          }
        }.bind(this)
          request.send( JSON.stringify(item))
  },

  //Button Controls

  addItemButton: function(e){
    var useButton = document.querySelector("#useItem")
        var addButton = document.querySelector("#addItem")
        var alButton = document.querySelector("#analyis")
    e.preventDefault()
    if(this.state.showAddItem == false){
       this.setState({showAddItem:true});
       addButton.innerText = "Hide Add Item Menu";
       this.setState({showUseItem:false})
       useButton.innerText = "Show Use Item Menu"
       this.setState({showAnalyis:false})
       alButton.innerText = "Show Analysis Menu"
    }else{
      this.setState({showAddItem:false})
      addButton.innerText = "Show Add Item Menu"
    }
  },

  useItemButton:function(e){
    var useButton = document.querySelector("#useItem")
    var addButton = document.querySelector("#addItem")
    var alButton = document.querySelector("#analyis")
    e.preventDefault()
    if(this.state.showUseItem == false){
       this.setState({showUseItem:true})
       useButton.innerText = "Hide Use Item Menu"
       this.setState({showAddItem:false});
       addButton.innerText = "Hide Add Item Menu";
       this.setState({showAnalyis:false})
       alButton.innerText = "Show Analysis Menu"
    }else{
      this.setState({showUseItem:false})
      useButton.innerText = "Show Use Item Menu"
    }
  },

  useAlButton:function(e){
   var useButton = document.querySelector("#useItem")
  var addButton = document.querySelector("#addItem")
  var alButton = document.querySelector("#analyis")
    if(this.state.showAnalyis == false){
       this.setState({showAnalyis:true})
       alButton.innerText = "Hide Analysis Menu"
       this.setState({showUseItem:false})
       useButton.innerText = "Hide Use Item Menu"
       this.setState({showAddItem:false});
       addButton.innerText = "Hide Add Item Menu";
    }else{
      this.setState({showAnalyis:false})
      alButton.innerText = "Show Analysis Menu"
    }
  },

  // Setting the state from Main form Inputs

  handleUserChange:function(e){
    e.preventDefault();
    this.setState({user: e.target.value});
  },

  handleYearChange:function(e){
    e.preventDefault();
    console.log(e.target.value);
    this.setState({year: e.target.value});
  },

  handleWeekChange:function(e){
    e.preventDefault();
    console.log(e.target.value);
    this.setState({week: e.target.value});
  },

  handleDayChange:function(e){
    e.preventDefault();
    console.log(e.target.value);
    this.setState({day: e.target.value});
  },

  handleSessionSubmit:function(e){
    e.preventDefault();
    console.log(this.state.year + " " + this.state.week + " " + this.state.day + " " + this.state.user )
  },


// Creating All Options for the Main Data Table
  createYearOption:function(year){
        return <option value={year} key={year} >{year} </option>;
    },
  createWeekOption:function(week){
    return <option value={week.toString()} key={week} >Week, {week} </option>;
  },
  createDayOption:function(day){
    return <option value={day} key={day} >{day} </option>;
  },


  render: function(){
    var totalStores = new TotalStores;
    totalStores.items = this.state.items;
    return(
        <div id="MainContainer">
          <header id="headerInfo">
           <p id="currentState">User: {this.state.user} </p><p> Year: {this.state.year} </p><p> Week: {this.state.week}</p><p> Day: {this.state.day}</p>
          </header>
          <div id="welcome">
            <h1 id="welcome_title">Welcome to the Stores App</h1>
            <p id="welcome_blurb" >This App will allow you to track all of the items that exist in your organisation. You will be able to Add items on arrival and then track when it has been used. From this data you wil then be able to analysis your stock levels and see how you are utilising your stocks.</p>
          </div>
          
          <div id="session_input">
            
              <h2>Please Input Your Data for this session</h2>
              <form id="session_data_form" onSubmit={this.handleSessionSubmit}>
                
                <label for="userName" id="name_entry">Enter User Name:  </label>
                <input name="userName" type="text" placeholder="Enter User Name" value={this.state.user} onChange={this.handleUserChange}/>
                
                <label for="yearSelect" id="yearSelect">Select Year: </label>
                <select name="yearSelect" id="yearSelect" onChange={this.handleYearChange}>
                  {["2015", "2016", "2017", "2018", "2019", "2020"].map(this.createYearOption)}
                </select>
                  <br/>
                  <br/>
                <label for="weekSelect" id="weekSelect">Select Week Number: </label>
                <select name="weekSelect" id="weekSelect" onChange={this.handleWeekChange}>
                  {Array.apply(null, Array(52)).map(function (_, i) {return i+1;}).map(this.createWeekOption)}
                </select>
                
                <label for="daySelect" id="daySelect">Select Day: </label>
                <select name="daySelect" id="daySelect" onChange={this.handleDayChange}>
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(this.createDayOption)}
                </select>
                <br/>
                <br/>
               <input type="submit" value="Set Values" />
              
            
            </form>
          </div>

          <div id="action_select">
          <h2 id="button Title">Please select Action</h2>
            <button id="addItem" onClick={this.addItemButton} value="Dogs">Add Item</button>
            <button id="useItem" onClick={this.useItemButton}>Use Item</button>
            <button id="analyis" onClick={this.useAlButton}>Analayis Current Stocks</button>
            <button>Build Order</button>
          </div>
          <div id="childViews">
          { this.state.showAddItem ? <AddItem foods={this.state.food} locations={this.state.location} user={this.state.user} year={this.state.year} week={this.state.week} day={this.state.day} itemSubmit={this.handleItemSubmit}/> : null }
          
          {this.state.showUseItem ? <UseItem locations={this.state.location} items={totalStores.liveItems()} user={this.state.user} year={this.state.year} week={this.state.week} day={this.state.day} useItem={this.handleItemUse} /> : null }
          
          {this.state.showAnalyis ? <AccountInfo locations={this.state.location} foods={this.state.food} usedItems={totalStores.usedItems()} liveItems={totalStores.liveItems()}/> : null}
          </div>
        </div>
      );
              
  
  }

});

module.exports = MainContainer;