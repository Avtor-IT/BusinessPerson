import { createSlice } from '@reduxjs/toolkit';

const initialState = { user: null, token: null };

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
		setToken(state, action) {
			state.token = action.payload;
		},
		removeUser(state) {
			state.user = null;
		},
		removeToken(state) {
			state.auth = null;
		},
	},
});

export const { setUser, setToken, removeUser, removeToken } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
