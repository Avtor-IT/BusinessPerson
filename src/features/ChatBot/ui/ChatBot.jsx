import SearchIcon from 'shared/icons/Search';
import Input from 'shared/ui/Input';

export const ChatBot = () => {
	return (
		<Input
			variant="card-styled"
			beforePlaceholder={
				<SearchIcon
					gradient={
						<>
							<linearGradient id="linear-gradient">
								<stop
									offset="0%"
									stopColor="var(--primary)"
								/>
								<stop
									offset="100%"
									stopColor="var(--secondary-light)"
								/>
							</linearGradient>
						</>
					}
				/>
			}
			inputProps={{ placeholder: 'Чат бот' }}
		/>
	);
};
