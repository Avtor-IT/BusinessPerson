import React from 'react';
import ServiceBlock from './ServiceBlock';
import PromoServiceBlock from './PromoServiceBlock';
import { SectionTitle } from 'shared/ui/SectionTitle';

const ServiceSection = ({ services }) => {
	const renderServices = () => {
		const result = [];

		for (let [name, options] of Object.entries(services)) {
			result.push(
				<ServiceBlock
					serviceTitle={options.title}
					key={name}
				>
					{options.isAvailable ? (
						options.component
					) : (
						<PromoServiceBlock
							title={options.title}
							tagList={options.promoContent.tagList}
							icon={options.promoContent.icon}
						/>
					)}
				</ServiceBlock>
			);
		}

		return result;
	};

	return (
		<>
			<SectionTitle>Мои услуги</SectionTitle>
			{renderServices()}
		</>
	);
};

export default ServiceSection;
