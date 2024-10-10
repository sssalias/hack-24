import { User } from '@nextui-org/user'

const Header: React.FC = () => {
	return (
		<header className='py-6'>
			<div className='flex justify-between items-center text-header text-mainGreen font-roboto'>
				<div className='flex gap-16 '>
					<button>LOGO</button>
					<button>Мои интересы</button>
					<button>Чаты</button>
				</div>
				<User
					name='Jane Doe'
					description='Product Designer'
					avatarProps={{
						src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
					}}
				/>
			</div>
		</header>
	)
}

export default Header
