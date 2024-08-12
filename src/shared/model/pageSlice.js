import { createSlice } from '@reduxjs/toolkit';

const initialState = { page: { link: window.location.pathname } };

const pageSlice = createSlice({
	name: 'page',
	initialState,
	reducers: {
		setPage(state, action) {
			state.page = action.payload;
		},
	},
});

export const { actions: pageActions } = pageSlice;
export const { reducer: pageReducer } = pageSlice;
