```md
– header (**Кирилл**)
– nav (**Кирилл**)
– MainPage
	– MainInfo (**Настя**)
		  | – info											<!-- Верхняя часть карт -->
			| – card (на всей стр используется, **Настя**)						<!-- Компания и счета -->
				| – card									<!-- фиолетовая карта -->
				 	| – MyCompany 								<!-- Моя компания -->
				 		| – title	
				 		| – More (link)
				 			| – infoBox
				 			| – name
				 			| – nalogNumberBox
				 				| – number
				 				| – CopyButt
									| – copyIcon
				 			| – buttonSet
				 				| – ImportButt(?)
									| – importIcon
				 				| – ExportButt
									| – exportIcon
			 	| – Accounts									<!-- Счета -->
			 		| – title
			 		| – paymentDateBox
			 			| – text
			 			| – PaymentDate
			 		| – HistoryPaymentButt (link?)
			 		| – toPayBox
			 			| – text
			 			| – PlusButt (link)
							| – plusIcon
		 	| – ManagerView										<!-- Мой менеджер -->
				| – card
			 		| – title
			 		| – toWriteBox (link)
			 			| – text
			 			| – chatIcon
			 		| – infoBox
			 			| – aboutManagerBox
			 				| – AvatarManager
			 				| – InfoManager
			 			| – phoneManagerBox
			 				| – phoneManager
			 				| – CopyButt
								| – copyIcon
		| – docs&recomends										<!-- Нижняя часть карт -->
		 	| – MyDocuments										<!-- Мои документы -->
				| – card
			 		| – title
			 		| – description
			 		| – deployBox (link)
			 			| – text
			 			| – arrowDownIcon
			 		| – requiredDocuments					 		<!-- предполагается, что СНИЛС, Устав, ОГРН и паспорт должны быть у всех -->
						| – array
			 				| – documentBox (link?)
			 					| – title
			 					| – CopyButt
									| – copyIcon
		 	| – Recommendations									<!-- Рекомендации -->
				| – card
					| – array
						| – card
					 		| – recommendationBox (link?)
					 			| – title
					 			| – description
	─ servicesSection (**Кирилл**)
		| − sectionName
			| − array
				| − serviceRow                               					<!-- Купленные услуги (здесь для бухгалтерских услуг. В других мб по-другому) -->
					| − serviceName
					| − serviceContent             
						| − card                             				<!-- Текущие налоги -->
							| − title
							| − content
								| − currentTaxesTable
									| − tableHeader
										| − headerCell
											| − taxText
										| − headerCell
											| − sumText
											| − sortButton
												| − sortIcon
										| − headerCell
											| − dateText
											| − sortButton
												| − sortIcon
									| − tableContent
										| − tableRow
											| − taxName
											| − taxSum
											| − taxDate
						| − card                                                         
							| − title
							| − content
								| − chartBox
									| − chartLegend
										| − chartLegendItem
											| − color
											| − name
									| − chart
										| − pieChart
										| − chartSum
			| − array
				| − serviceRow                                 					<!--  Предложение купить услугу -->
					| − serviceName
					| − servicePromoContent
						| − promoCard                       
							| − title
							| − content
								| − tagList                      
								| − tipBox
									| − tipContent
									| − closeButton
										| − closeIcon
							| − addService (link)
								| − addIcon
			
```
