import React, { Component } from 'react';
import {connect} from 'react-redux';
// var imageName = require('')


class Product extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.product.title}</h2>
      <img width={"100px"} height={"100px"} alt={"Test"} src={'src/images/test.jpg'}></img>
      <p>{this.props.product.description}</p>
      <p>{this.props.product.price}</p>

      <button onClick={()=>this.props.dispatch({type:'EDIT_PRODUCT',id:this.props.product.id})}>Edit</button>
      <button onClick={()=>this.props.dispatch({type:'DELETE_PRODUCT',id:this.props.product.id})}>Delete</button>
    </div>
  );
 }
}
export default connect() (Product);