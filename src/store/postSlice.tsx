import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState ={
    entries:[],
    loading:false
}

export const getPosts = createAsyncThunk('post/getPosts', async(thunkAPI)=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    .then( (data) => data.json() ) 
    return res 
})
export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
          .addCase(getPosts.pending, (state) => {
            state.loading = true;
          })
          .addCase(getPosts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.entries = payload;
          })
          .addCase(getPosts.rejected, (state) => {
            state.loading = false;
          });
      },
})
export const { actions, reducer: postReducer } = postSlice;