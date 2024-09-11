import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { pageReducer } from 'shared/model/pageSlice';

export default configureStore({
	reducer: { user: userReducer, page: pageReducer },
});
