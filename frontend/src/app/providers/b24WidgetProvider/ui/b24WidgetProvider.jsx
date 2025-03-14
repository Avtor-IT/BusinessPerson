import { useEffect, useRef } from 'react';
import { md5 } from 'js-md5';
import { useLocation } from 'react-router-dom';

const addWidgetEvent = (eventHandler) => {
	window.addEventListener('onBitrixLiveChat', function (event) {
		const widget = event.detail.widget;
		const hash = md5('userName' + event.detail.widgetCode);

		widget.setUserRegisterData({
			hash: hash,
			name: 'тест',
			lastName: 'тестович',
			gender: 'M',
		});

		const widgetElements = {
			widget,
			button: widget.buttonInstance.container,
			chatList: widget.buttonInstance.wm.getList() || [],
		};

		if (eventHandler) {
			eventHandler(widgetElements);
		}
	});
};

const addWidgetScript = () => {
	const body = document.querySelector('body');

	const widgetScript = document.createElement('script');
	widgetScript.innerHTML = `(function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://b-p24.ru/upload/crm/site_button/loader_2_0f61hn.js');`;
	body.append(widgetScript);
};

const B24WidgetProvider = ({ children }) => {
	const widgets = useRef([]);
	const rerenders = useRef(0);

	const location = useLocation();
	useEffect(() => {
		if (rerenders.current === 0 && location.pathname !== '/login') {
			addWidgetEvent((widgetElements) => {
				// console.log(widgetElements.widget);
				// widgetElements.button.style = 'display: none';
				// widgetElements.chatList.forEach(
				// 	(w) => (w.style = 'display: none')
				// );
				// setWidgetElements(widgetElements);
				widgets.current.push(widgetElements);
			});
			addWidgetScript();
		}
		rerenders.current++;
	}, [location.pathname]);

	return children;
};

export default B24WidgetProvider;
