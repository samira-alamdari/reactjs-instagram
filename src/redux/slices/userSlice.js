import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    chat:[],
    instaChat:[]
}

export const userSlice=createSlice({
        name:'chat',
        initialState,
        reducers:{
            ACTION_MAKE_CHAT:(state,action )=> {
                state.chat.push(action.payload)
            },
            ACTION_MAKE_FAKE:(state,action)=>{
                state.instaChat.push(action.payload)
            }
        }
    },
    )
export const {ACTION_MAKE_CHAT , ACTION_MAKE_FAKE}=userSlice.actions
export default  userSlice.reducer;