import { MainLayout } from 'src/layout'

const ChatPage: React.FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col p-6'>
				<div className='flex justify-between items-center mb-6'>
					<span className='text-mainGreen font-customFont text-3xl'>ЧАТЫ</span>
					<input
						type='text'
						placeholder='Поиск'
						className='border opacity-50 border-gray-400 rounded-lg p-2 bg-darkGray text-white'
					/>
				</div>
				<div className='text-white'>
					<ChatItem
						name='Junior Garcia'
						avatarSrc='https://i.pravatar.cc/150?u=a04258114e29026702d'
						description='Музыкант, программист'
						message='СообщениеСообщениеСообщениеСообщениеСообщениеСообщение'
						time='10.10.2024 19:12'
						unreadCount={8}
					/>
				</div>
			</div>
		</MainLayout>
	)
}

const ChatItem: React.FC<{
	name: string
	avatarSrc: string
	description: string
	message: string
	time: string
	unreadCount: number
}> = ({ name, avatarSrc, description, message, time, unreadCount }) => {
	return (
		<div className='bg-mainGray px-2 py-4 rounded-lg'>
			<div className='flex items-center mb-4 p-4 bg-darkGray rounded-xl'>
				<img
					src={avatarSrc}
					alt={`${name}'s avatar`}
					className='rounded-full w-16 h-16 mr-4'
				/>
				<div className='flex flex-col w-full'>
					<div className='flex justify-between'>
						<span className='text-mainGreen font-semibold'>{name}</span>
						<span className='text-gray-400 text-sm'>{time}</span>
					</div>
					<span className='text-gray-300 text-sm'>{description}</span>
					<p className='text-white truncate'>{message}</p>
				</div>
				{unreadCount > 0 && (
					<div className='flex items-center justify-center bg-mainGreen text-white rounded-full w-6 h-6 ml-4'>
						{unreadCount}
					</div>
				)}
			</div>
			<div className='flex items-center mb-4 p-4 bg-darkGray rounded-lg'>
				<img
					src={avatarSrc}
					alt={`${name}'s avatar`}
					className='rounded-full w-16 h-16 mr-4'
				/>
				<div className='flex flex-col w-full'>
					<div className='flex justify-between'>
						<span className='text-mainGreen font-semibold'>{name}</span>
						<span className='text-gray-400 text-sm'>{time}</span>
					</div>
					<span className='text-gray-300 text-sm'>{description}</span>
					<p className='text-white truncate'>{message}</p>
				</div>
				{unreadCount > 0 && (
					<div className='flex items-center justify-center bg-mainGreen text-white rounded-full w-6 h-6 ml-4'>
						{unreadCount}
					</div>
				)}
			</div>
			<div className='flex items-center mb-4 p-4 bg-darkGray rounded-lg'>
				<img
					src={avatarSrc}
					alt={`${name}'s avatar`}
					className='rounded-full w-16 h-16 mr-4'
				/>
				<div className='flex flex-col w-full'>
					<div className='flex justify-between'>
						<span className='text-mainGreen font-semibold'>{name}</span>
						<span className='text-gray-400 text-sm'>{time}</span>
					</div>
					<span className='text-gray-300 text-sm'>{description}</span>
					<p className='text-white truncate'>{message}</p>
				</div>
				{unreadCount > 0 && (
					<div className='flex items-center justify-center bg-mainGreen text-white rounded-full w-6 h-6 ml-4'>
						{unreadCount}
					</div>
				)}
			</div>
		</div>
	)
}

export default ChatPage
