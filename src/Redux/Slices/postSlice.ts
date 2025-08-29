import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../Models/IPost.ts";
import {getAll} from "../../Services/api.services.ts";


type PostSliceType = {
    posts:IPost[];
}
const initPostSliceState:PostSliceType = {posts:[]}

const loadPosts=createAsyncThunk("loadPosts",async(_, thunkAPI)=>{
    const posts=await getAll<IPost[]>("/posts");
    return thunkAPI.fulfillWithValue(posts);
});

export const postSlice =createSlice({
    name:"postSlice",
    initialState:initPostSliceState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.posts = action.payload;
    }),
});

export const postActions={...postSlice.actions, loadPosts};
