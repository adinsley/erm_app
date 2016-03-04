var React = require('react');
var ReactDOM =  require('react-dom');


window.onload = function(){
  console.log("webpack app started");
  ReactDOM.render(
<h1>Can you see This react</h1>, 
document.getElementById('app')
  );//Render takes in 2 arguements, first what to render, the second where to render it too.

};