import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:'cart',
  initialState:{
    itemsList:[],
    totalQty:0,
    showCart:false
  },
  reducers:{
addToCart(state,action){
  const newItem = action.payload;
  //toCheck if item already available
  const exisiting = state.itemsList.find((item)=>item.id===newItem.id);
  if(exisiting){
    exisiting.quantity ++;
    exisiting.totalPrice+=newItem.price;
  }else{
  state.itemsList.push({
  id:newItem.id,
  price:newItem.price,
  quantity:1,
  totalPrice : newItem.price,
  name:newItem.name
});
state.totalQty++;
  }
},
removeFromCart(state,action){ 
  const id = action.payload;
  const exisitingItems= state.itemsList.find(item=>item.id===id);
  if(exisitingItems.quantity===1){
    state.itemsList= state.itemsList.filter(item=>item.id !==id)
  }else{
    exisitingItems.quantity--;
    exisitingItems.totalPrice-=exisitingItems.price
  }
},
setShowCart(state){
  state.showCart=!state.showCart;
}
  }

})

export const cartActions = cartSlice.actions;

export default cartSlice