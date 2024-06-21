import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
        removeUser(state) {
            state.user.user = null;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
