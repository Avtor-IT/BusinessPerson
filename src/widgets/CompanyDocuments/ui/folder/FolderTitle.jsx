import { Stack } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { RoutePath, AppRoutes } from 'shared/config/routeConfig';
import ArrowIcon from 'shared/icons/Arrow';

const FolderTitle = ({ pathArray }) => {
	const { companyTitle } = useParams();
	return (
		<Stack
			direction="row"
			gap={2}
		>
			{pathArray.map((path, i) => {
				console.log(pathArray.slice(0, i + 1).join('/'));
				return (
					<>
						<Link
							to={`${
								RoutePath[AppRoutes.COMPANY]
							}/${companyTitle}/documents/${pathArray
								.slice(0, i + 1)
								.join('/')}`}
							key={path}
						>
							{path}
						</Link>
						{i !== pathArray.length - 1 && (
							<ArrowIcon
								strokeWidth={2}
								strokeColor="var(--secondary)"
							/>
						)}
					</>
				);
			})}
		</Stack>
	);
};

export default FolderTitle;
