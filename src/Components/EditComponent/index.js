import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newDescription = this.getDescription.value;
  const data = {
    newTitle,
    newDescription
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.product.id, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.product.title} placeholder="Enter Product Title" /><br /><br />
     <input required type="text" ref={(input) => this.getPrice = input}
    defaultValue={this.props.product.price} placeholder="Enter Price" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getDescription = input}
    defaultValue={this.props.product.description} cols="28" placeholder="Enter Product" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);