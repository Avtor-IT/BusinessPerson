```md
– header (Кирилл)
– nav (Кирилл)
– MainPage
	– MainInfo (Настя)
		  | – info
			| – card (на всей стр используется, Настя)
			 	| – MyCompany 
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
			 	| – Accounts
			 		| – title
			 		| – paymentDateBox
			 			| – text
			 			| – PaymentDate
			 		| – HistoryPaymentButt (link?)
			 		| – toPayBox
			 			| – text
			 			| – PlusButt (link)
							| – plusIcon
		 	| – ManagerView
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
   		| – docs&recomends
		 	| – MyDocuments
				| – card
			 		| – title
			 		| – description
			 		| – deployBox (link)
			 			| – text
			 			| – arrowDownIcon
			 		| – requiredDocuments					                 <!-- предполагается, что СНИЛС, Устав, ОГРН и паспорт должны быть у всех -->
						| – array
			 				| – documentBox (link?)
			 					| – title
			 					| – CopyButt
									| – copyIcon
		 	| – MyRecommendations
				| – card
					| – array
						| – card
					 		| – recommendationBox (link?)
					 			| – title
					 			| – description
	─ servicesSection (Кирилл)
		| − sectionName
			| − array
				| − serviceRow                                                                   <!-- Купленные услуги (здесь для бухгалтерских услуг. В других мб по-другому) -->
					| − serviceName
					| − serviceContent             
						| − card                                                         <!-- Текущие налоги -->
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
				| − serviceRow                                                                   <!--  Предложение купить -->
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
