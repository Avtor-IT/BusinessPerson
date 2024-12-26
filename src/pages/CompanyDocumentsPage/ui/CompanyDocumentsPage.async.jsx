import { lazy } from 'react';

export const CompanyDocumentPageAsync = lazy(() =>
	import('./CompanyDocumentPage.jsx')
);
