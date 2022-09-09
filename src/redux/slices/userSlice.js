import {createSlice} from "@reduxjs/toolkit";

const initialState= {
    chat:[],
    instaChat:'just wanna answer to you',
}

export const userSlice=createSlice({
        name:'chat',
        initialState,
        reducers:{
            ACTION_MAKE_CHAT:(state,action )=> {
                state.chat.push(action.payload)
            },
            ACTION_MAKE_FAKE:(state)=>{
                setTimeout(
                    state.instaChat = state,5000)
            }
        }
    },
    )
export const {ACTION_MAKE_CHAT , ACTION_MAKE_FAKE}=userSlice.actions
export default  userSlice.reducer;