import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Api from '../../API/Api'

export interface CounterState {
  Cart: any[]
}

const initialState: CounterState = {
  Cart: []
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.Cart = [...state.Cart, action.payload]
    },

    removeFromCart: (state, action) => {
      const index = state.Cart.findIndex(
        (Cart) => Cart.id === action.payload.id
      );

      let newCart = [...state.Cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in Cart`
        );
      }

      state.Cart = newCart;
    },
    cleanCart: (state, action) => {
      state.Cart = [];
    },


  },
},
)

export const { addToCart, removeFromCart, cleanCart } = CartSlice.actions

// Action creators are generated for each case reducer function

export default CartSlice.reducer

export const selectCartItems = (state: any) => state.Cart.items;

export const selectCartItemsWithId = (state: any, id: number) =>
  state.Cart.items.filter((item: any) => item.id === id);

export const selectCartTotal = (state: any) =>
  state.Cart.Cart.reduce((total:any , item:any ) => (total += item.price), 0);


