import { Avatar, Box } from '@mui/material';

// пока непонятно как будут приходить данные, поэтому пока будет так
// (картинок на сайте нет, поэтому ради тестовой картинки не будем делать норм)
// Возможно этот файл не нужен

const AvatarManager = () => {
	return (
		<Box>
			<Avatar
				alt="Тестовый аватар"
				// src="../ui/temporaryAvatar.jpg"
				sx={{ width: 82, height: 82 }}
			/>
		</Box>
	);
};

export default AvatarManager;
