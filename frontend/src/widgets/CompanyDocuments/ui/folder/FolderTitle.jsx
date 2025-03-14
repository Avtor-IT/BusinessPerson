import { Stack } from '@mui/material';
import { Fragment, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowIcon from 'shared/icons/Arrow';
import { AppRoutes, RoutePath } from 'shared/router';

const FolderTitle = ({ pathArray }) => {
	const { companyTitle } = useParams();

	const slicedPathArray = useMemo(() => {
		if (pathArray?.length > 3) {
			return [...pathArray.slice(0, 1), ...pathArray.slice(-2)];
		}
		return pathArray;
	}, [pathArray]);

	return (
		<Stack
			direction="row"
			gap={2}
		>
			{slicedPathArray.map((path, i) => (
				<Fragment key={path}>
					<Link
						onClick={(e) => e.stopPropagation()}
						to={`${
							RoutePath[AppRoutes.COMPANY]
						}/${companyTitle}/documents/${pathArray
							.slice(0, i + 1)
							.join('/')}`}
					>
						{path}
					</Link>
					{i !== slicedPathArray.length - 1 && (
						<ArrowIcon
							strokeWidth={2}
							strokeColor="var(--secondary)"
						/>
					)}
				</Fragment>
			))}
		</Stack>
	);
};

export default FolderTitle;
