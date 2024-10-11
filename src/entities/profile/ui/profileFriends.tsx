import { Button, User } from '@nextui-org/react'
const ProfileFriends: React.FC = () => {
	return (
		<div className='flex flex-col gap-4'>
			<div className='bg-mainGray flex justify-between items-center p-4 rounded-xl'>
				<div className='flex flex-col'>
					<User
						name='Jane Doe'
						description='Product Designer'
						avatarProps={{
							size: 'lg',
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
						}}
						className=''
					/>
					<button className='text-blue-600 pl-4'>Написать сообщение</button>
				</div>
				<div className='flex gap-2'>
					<Button color='success'>Добавить в друзья</Button>
					<Button color='danger'>Отклонить заявку</Button>
				</div>
			</div>
			<div className='bg-mainGray flex justify-between items-center p-4 rounded-xl'>
				<div className='flex flex-col'>
					<User
						name='Jane Doe'
						description='Product Designer'
						avatarProps={{
							size: 'lg',
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
						}}
						className=''
					/>
					<button className='text-blue-600 pl-4'>Написать сообщение</button>
				</div>
				<div className='flex gap-2'>
					<Button color='success'>Добавить в друзья</Button>
					<Button color='danger'>Отклонить заявку</Button>
				</div>
			</div>
		</div>
	)
}
export default ProfileFriends
