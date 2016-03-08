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
        return <option value={locale.id} key={locale.id}>{locale.name} </option>
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
    e.preventDefault()
    console.log(this.state.location)
    console.log(this.state.food)
    console.log(this.state.user)
    console.log(moment(this.state.date).format("YYYY[-]MM[-]DD"))

  },

  render: function(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
           <select onChange={this.setFood}>
                <option>Select Food</option>
                 {this.props.foods.map(this.createFoodOption)}
           </select>

          <input type="date" placeholder="date" value={moment(this.state.date).format("YYYY[-]MM[-]DD")} onChange={this.setDate}></input>
          
          <input type="submit" value="Create Item" />
        </form>
      </div>
    )
}
});

module.exports = AddItem;