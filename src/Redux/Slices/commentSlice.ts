import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../Models/IComment.ts";
import {getAll} from "../../Services/api.services.ts";

type CommentSliceType = {
    comments:IComment[];
}
const initCommentSliceState:CommentSliceType = {comments:[]}

const loadComments=createAsyncThunk("loadComments",async(_, thunkAPI)=>{
    const comments=await getAll<IComment[]>("/comments");
    return thunkAPI.fulfillWithValue(comments);
});

export const commentSlice =createSlice({
    name:"commentSlice",
    initialState:initCommentSliceState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
        state.comments = action.payload;
    }),
});

export const commentActions={...commentSlice.actions, loadComments};
