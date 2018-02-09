//App.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Title = (props) => {
  return (
      <div className="title">
        <h1>{this.props.match.prams}</h1>
      </div>
  )
}
const List = () => {
  return (
    <div className="nav">
      <ul>
        <li>list item</li>
        <li>list item</li>
      </ul>
      <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}
module.exports = {
  Title,
  List
};