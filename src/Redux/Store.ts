import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./Slices/userSlice.ts";
import {postSlice} from "./Slices/postSlice.ts";
import {commentSlice} from "./Slices/commentSlice.ts";

export const store = configureStore({
    reducer: {
        userStoreSlice:userSlice.reducer,
        postStoreSlice:postSlice.reducer,
        commentStoreSlice:commentSlice.reducer,
    },
})