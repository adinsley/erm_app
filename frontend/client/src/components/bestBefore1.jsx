var React = require('react');
var Item = require('../models/item.js')
var TotalStores = require('../models/totalStores.js')
var Moment = require('moment')

var BestBefore = React.createClass({

  getInitialState: function() {
    return {selectedDate:null};
  },

  handleBbdChange: function(e){
    e.preventDefault(e)
    this.setState({selectedDate:new Date(e.target.value)})

  },

  handleMonth : function(e){
    var dateNow = Moment();
    var month = dateNow.add("Months", 1).toDate();
    this.setState({selectedDate:month})

  },

  handleWeek : function(e){
    var dateNow = Moment();
    var week = dateNow.add("Weeks", 1).toDate();
    this.setState({selectedDate:week})

  },

  handleTomorrow : function(e){
    var dateNow = Moment();
    var tomorrow = dateNow.add("Days", 1).toDate();
    this.setState({selectedDate:tomorrow})

  },

  bestBeforeTable: function(){
    var outOfDate = new TotalStores;
    outOfDate.items = this.props.locationbbd
    var outofDateItems = outOfDate.sortbyDate(this.state.selectedDate)

    if(outofDateItems[0]){
      return outofDateItems.map(function(item, index){
         return (
           <tr>
              <td>{item.name}</td>
              <td>{Moment(item.best_before).format("dddd, MMMM Do YYYY")}</td>
              <td>{Moment(item.best_before).subtract(Moment(new Date())).format("Do")}</td>
              <td>{item.onload_day}</td>
              <td>{item.onload_week}</td>
              <td>{item.onload_year}</td>
              
          </tr> 
           )
         })//End of the map
        }else{
          return (
           <tr>
              <td>No Items Out of Date</td>
          </tr> 
          )
        }//End of if
  },

  render: function(){
    return(
     <div id = "main_bbd">
      <form >
       
        <input type="radio" name="time" value="day" onClick={this.handleTomorrow}> By Tomorrow</input><br/>
        <input type="radio" name="time" value="week" onClick={this.handleWeek}> 1 Week From Today</input><br/>
        <input type="radio" name="time" value="month" onClick ={this.handleMonth}> 1 Month from Today</input>
      </form>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Best Before</th>
            <th>Out of Days By</th>
            <th>Onload Day</th>
            <th>Onload Week</th>
            <th>Onloaded Year</th>
           </tr> 
        </thead>
        <tbody>
            {this.bestBeforeTable()}
        </tbody>
      </table>
    </div>

      )

  }


})

module.exports= BestBefore;