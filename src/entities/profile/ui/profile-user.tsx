import { Button } from '@nextui-org/button'
import { User } from '@nextui-org/user'

const ProfileUser: React.FC = () => {
	return (
		<div className='flex justify-between items-center'>
			<User
				name='Jane Doe'
				description='Product Designer'
				avatarProps={{
					src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
					size: 'lg',
				}}
				classNames={{
					name: 'text-4xl',
					description: 'text-md',
				}}
			/>
			<Button className='text-black bg-mainGreen ml-6'>Подписка</Button>
		</div>
	)
}

export default ProfileUser
