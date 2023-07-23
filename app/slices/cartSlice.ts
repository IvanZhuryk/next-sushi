
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
type Id = {
    "id":number
}
type Item = {
        "id": number;
        "image":string;
        "price":number;
        "size":number;
        "title":string;   
        "count":number
}
type ItemState = {
    list:Item[],
} 
const initialState:ItemState = {
    list: [],
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setitems: (state,action:PayloadAction<Item>) => {
            const findItem = state.list.find(obj => obj.id === action.payload.id);
            if (findItem?.count) {
                findItem.count++;
            }else state.list.push({...action.payload,count:1})
        },
        setItemsFromLocal: (state,action:PayloadAction<Item[]>) =>{
            state.list = action.payload
        },
        removeItem:(state,action:PayloadAction<Id>)=>{
            state.list = state.list.filter((obj)=> obj.id !==action.payload.id);
        },
        minusItem:(state, action:PayloadAction<Id>) =>{
            const findItem = state.list.find(obj => obj.id === action.payload.id);
            if(findItem?.count){
                if(findItem.count > 1) {
                    findItem.count--;
                } else{
                    state.list = state.list.filter((obj)=> obj.id !==action.payload.id)
                }
            }
        },
        plusItem:(state, action:PayloadAction<Id>) =>{
            const findItem = state.list.find(obj => obj.id === action.payload.id);
            if(findItem?.count){
                findItem.count++
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setitems, setItemsFromLocal,removeItem, minusItem, plusItem} = cartSlice.actions

export default cartSlice.reducer