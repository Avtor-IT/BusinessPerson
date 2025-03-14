import { createSelectors } from 'shared/zustand';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useDocumentsFilterStoreBase = create(
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

const useDocumentsFilterStore = createSelectors(useDocumentsFilterStoreBase);
export default useDocumentsFilterStore;
