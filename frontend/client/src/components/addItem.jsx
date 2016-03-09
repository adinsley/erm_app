var React = require('react');
var moment = require('moment')


var AddItem = React.createClass({
  getInitialState: function() {
    return {date:Date.now(), user:"Andrew Insley", food:null, location:null};
  },
  
  createFoodOption:function(food){
        return <option id={food.id} value={food.id} key={food.id}>{food.name}</option>
    },
  createLocationOption:function(locale){
        // var str = locale.id + "|" +locale.store
        return <option  value= {locale.id} key={locale.id}>{locale.name} {locale.store} </option>
    },
  setDate:function(e){
    e.preventDefault();
    console.log('e', Date.parse(e.target.value))
    this.setState({date: Date.parse(e.target.value)})
  },
  setLocation:function(e){
    e.preventDefault();
    console.log('e', e.target.value)
    this.setState({location: e.target.value})
  },
  setFood:function(e){
    e.preventDefault();
    console.log('e', e.target.value)
    this.setState({food: e.target.value})
  },

  handleSubmit:function(e){
    
    // this.props.onCommentSubmit({author: author, text: text});
    // this.setState({author: '', text: ''});
    
    e.preventDefault(e)
    var user = this.props.user.trim();
    var year = this.props.year
    var week = this.props.week
    var day = this.props.day
    var foodId = this.state.food
    var locationId = this.state.location
    var bestBefore = moment(this.state.date).format("YYYY[-]MM[-]DD")
    this.props.itemSubmit({onload_year: year, onload_week:week, onload_day:day, onload_by:user, best_before: bestBefore, food_id:foodId, location_id:locationId})
    this.setState({food:null, location:null})

  },

  render: function(){

    return(
      <div id="addContainer">
        <h4>This section is replicating the function of a scanner when food is onloaded</h4>
        <form id="addForm" onSubmit={this.handleSubmit}>
           <select onChange={this.setFood}>
                <option>Select Food</option>
                 {this.props.foods.map(this.createFoodOption)}
           </select>

           <select onChange={this.setLocation}>
                <option>Select Location</option>
                 {this.props.locations.map(this.createLocationOption)}
           </select>
           <label for="bbd">Best Before Date: </label>
          <input name="bbd" type="date" placeholder="date" value={moment(this.state.date).format("YYYY[-]MM[-]DD")} onChange={this.setDate}></input>
          
          <input type="submit" value="Create Item" />
        </form>
      </div>
    )
}
});

module.exports = AddItem;