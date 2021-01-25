const productReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_PRODUCT':
        return state.concat([action.data]);
      case 'DELETE_PRODUCT':
        return state.filter((product)=>product.id !== action.id);
        case 'EDIT_PRODUCT':
      return state.map((product)=>product.id === action.id ? {...product,editing:!product.editing}:product)
      case 'UPDATE':
      return state.map((product)=>{
        if(product.id === action.id) {
          return {
             ...product,
             title:action.data.newTitle,
             description:action.data.newDescription,
             price: action.data.newPrice,
             editing: !product.editing
          }
        } else return product;
      })
      default:
        return state;
    }
  }
  export default productReducer;