import React, { Component } from 'react';
import {connect} from 'react-redux';
class AddForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const description =  this.getDescription.value;
    const price = this.getPrice.value;
    const data = {
      id: new Date(),
      title,
      description,
      price,
      editing:false
    }
    this.props.dispatch({
      type:'ADD_PRODUCT',
      data});
    this.getTitle.value = '';
    this.getDescription.value = '';
    this.getPrice.value = '';
  }
render() {
return (
<div>
  <h1>Create Product</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getTitle = input} 
    placeholder="Enter Product Name"/>
   <br /><br />
   <textarea required rows="5" ref={(input)=>this.getDescription = input} cols="28" 
    placeholder="Enter Product description" />
   <br /><br />
   <input required type="text" ref={(input)=>this.getPrice = input} 
    placeholder="Enter Listing Price"/>
   <br /><br />
   <button>List</button>
  </form>
</div>
);
}
}
export default connect()(AddForm);