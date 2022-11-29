import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Api from '../../API/Api'

export interface CounterState {
  User: any[]
}

const initialState: CounterState = {
  User: []
}

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    UserActive: (state: any, action: any) => {
      state.User = action.payload;
    },
  },
},
)

export const {  } = UserSlice.actions

// Action creators are generated for each case reducer function

export default UserSlice.reducer

export const SelectUser = () = (dispacth:any) => {
  Api.get() 
}
