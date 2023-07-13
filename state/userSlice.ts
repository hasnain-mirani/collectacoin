import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import UserService from "@/state/userSlice";
import { HYDRATE } from "next-redux-wrapper";

type initialStateType = {
    user: any
    logged_in: Boolean,
    loading: Boolean,
    errorMessage: any
}
interface formInterface{
    email: String,
    password: String
}
export const login = createAsyncThunk('user/login', async(userData:formInterface, thunkAPI: any)=> {
    try{
     let data = await UserService.login(userData);
        return data.data;
    }catch(err:any){
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString();
         return  thunkAPI.rejectWithValue(message);
    }
})



const initialState:initialStateType = {
    user: null,
    logged_in: false,
    loading: false,
    errorMessage: ""
}
export const userSlice = createSlice({
    name: "userState",
    initialState,
    reducers: {
        logout: (state)=> {
            state.user= null;
            state.logged_in = false;
            state.errorMessage = "";
            state.loading = false;
        }
    },
    extraReducers: (builder)=> {
        builder
        .addCase(login.fulfilled, (state, action)=> {
            state.user = action.payload;
            state.logged_in = true;
            state.loading = false;
            state.errorMessage = ""
        })
        .addCase(login.pending, (state, action)=> {
            state.loading = true; 
        })
        .addCase(login.rejected, (state, action)=> {
            state.user = null;
            state.logged_in = false;
            state.loading = false;
            state.errorMessage = action.payload;
        })
        .addMatcher(
            (action) => action.type === HYDRATE && action.payload.auth,
            (state, action) => {
              return {
                ...state,
                ...action.payload.userState,
              };
            }
          );
        
    }

})
export const {logout} = userSlice.actions;
export default userSlice.reducer;