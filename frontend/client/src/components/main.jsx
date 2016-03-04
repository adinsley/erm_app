var React = require('react');


var MainContainer = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  fetchItems:function(){
    var request = new XMLHttpRequest();
      request.open("GET", this.props.url);
      request.onload = function(){
        if(request.status ==200){
          var receivedItems = JSON.parse(request.responseText)
          this.setState({data:receivedItems})
        }
      }.bind(this)

      request.send(null);
  },

  componentDidMount: function(){
    this.fetchItems();
    setInterval(this.fetchItems, 1000)
  },



  render: function(){
    return(
      <div>
        <h1>This is now inside the main container</h1>
      
      </div>
    )
}
});

module.exports = MainContainer;