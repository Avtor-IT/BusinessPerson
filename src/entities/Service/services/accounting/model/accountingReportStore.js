import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createSelectors } from 'shared/zustand';

const useAccountingReportStoreBase = create(
	immer((set) => ({
		report: '',
		setReport: (newReport) =>
			set((state) => {
				state.report = newReport;
			}),
	}))
);

const useAccountingReportStore = createSelectors(useAccountingReportStoreBase);
export default useAccountingReportStore;
