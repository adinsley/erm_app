var React = require('react');
var ReactDOM =  require('react-dom');
var Main = require('./components/main.jsx')


window.onload = function(){
  console.log("webpack app started");
  ReactDOM.render(
<Main></Main>, 
document.getElementById('app')
  );//Render takes in 2 arguements, first what to render, the second where to render it too.

};