import {createSlice} from '@reduxjs/toolkit'

const initialState = { //первоначальное состояние
  categoryId: 0 ,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
}

const filterSlice = createSlice({ // функции которые будут менять состояния
  name: 'filters',
  initialState,
  reducers:{
    setCategoryID(state, action){
      state.categoryId = action.payload
    },
    setSort(state,action){
      state.sort = action.payload
    }
  },
});

export const {setCategoryID, setSort} = filterSlice.actions;

export default filterSlice.reducer