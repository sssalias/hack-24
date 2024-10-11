import { User } from '@nextui-org/user'
import logo from './logo.svg'
const Header: React.FC = () => {
	return (
		<header className='py-6'>
			<div className='flex justify-between items-center text-header text-mainGreen font-roboto'>
				<img src={logo} alt='logo' />
				<div className='flex gap-16 '>
					<button>Мои интересы</button>
					<button>Чаты</button>
					<button>Публикации</button>
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
