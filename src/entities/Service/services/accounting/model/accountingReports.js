import {
	ENSReport,
	FNSReport,
	ReportPlaceholder,
	RequirementsReport,
} from '../reports';

export const accountingReports = [
	{
		title: 'ГОСОРГАНЫ',
		reports: [
			{ title: 'ФНС', component: FNSReport },
			{ title: 'СФП', component: ReportPlaceholder },
			{ title: 'Росстат', component: ReportPlaceholder },
			{ title: 'Требования', component: RequirementsReport },
			{ title: 'Сальдо ЕНС', component: ENSReport },
			{ title: 'Другие отчеты', component: ReportPlaceholder },
		],
	},
	{
		title: 'Финансовая информация',
		reports: [{ title: 'Выгрузка с ОФД' }, { title: 'Выписки с банков' }],
	},
];

export const accountingReferences = [
	{ title: 'Анализ расходов и доходов' },
	{ title: 'Сведения из ЕГРЮЛ/ЕГРИП' },
];
