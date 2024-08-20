import React, { useEffect, useRef, useState } from 'react';
import { Typography } from '@mui/material';
import ChatList from 'widgets/ChatList';
import { md5 } from 'js-md5';

const addWidgetEvent = (eventHandler) => {
	window.addEventListener('onBitrixLiveChat', function (event) {
		const widget = event.detail.widget;

		const hash = md5('userName');

		widget.setUserRegisterData({
			hash: hash,
			name: 'Кирилл',
			lastName: 'Перетятько',
			gender: 'M',
			position: 'Почетный пользователь',
		});
		widget.open();
		eventHandler &&
			eventHandler(document.querySelectorAll('.bx-livechat-wrapper'));
	});
};

const addWidgetScript = () => {
	const body = document.querySelector('body');

	const widgetScript = document.createElement('script');
	widgetScript.innerHTML = `
					(function(w,d,u){
							var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
							var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
					})(window,document,'https://b-p24.ru/upload/crm/site_button/loader_2_0f61hn.js');
				`;
	body.append(widgetScript);
};

const AppealsPage = () => {
	const [widgets, setWidgets] = useState([]);

	const widgetList = useRef(null);

	let renders = 0;
	useEffect(() => {
		renders++;
		(async () => {
			if (renders === 1) {
				addWidgetEvent(setWidgets);

				addWidgetScript();
			}
		})();
	}, []);

	useEffect(() => {
		// widgets.forEach((w, i) => {
		// 	w.style.position = 'static';
		// 	w.style.marginBottom = '10px';
		// 	w.style.height = '60px';
		// 	if (widgetList.current) {
		// 		widgetList.current.appendChild(w);
		// 	}
		// });
	}, [widgets]);

	return (
		<div>
			<Typography component="h1">Appeals page</Typography>
			<ChatList />
			<div ref={widgetList}></div>
		</div>
	);
};

export default AppealsPage;
