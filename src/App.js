import React, { Component } from 'react';
import AddForm from './Components/AddProduct';
import AllProduct from './Components/AllProduct';


class App extends Component {
  render() {
      return (
      <div className="App">
        <AddForm />
        <AllProduct />
      </div>
      );
  }
  }
export default App;
