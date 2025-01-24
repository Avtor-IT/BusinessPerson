import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useDocumentsFilterStore = create(
	immer((set) => ({
		filters: {
			search: '',
		},
		setSearch: (newSearch) =>
			set((state) => {
				state.filters.search = newSearch;
			}),
	}))
);

export const searchSelector = (state) => state.filters.search;
export const setSearchSelector = (state) => state.setSearch;

export default useDocumentsFilterStore;
