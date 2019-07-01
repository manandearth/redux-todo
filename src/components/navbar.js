import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
    render(){
    return(
    <div className ="topnav">
  <a className="active" href="#home">Home</a>
  <a href="https://github.com/manandearth/redux-todo">Github project</a>
      <a href="#about">About</a>
      <span>Todo Lists/ Expanding the redux basic example</span>
    </div>
    );
    }
}


var lineStyle = {
    stroke: 'blue',
    fill: 'yellowgreen',
    strokeWidth: '1'
};

export default Navbar;
