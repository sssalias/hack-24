import { User } from '@nextui-org/user'
import { RiVipLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import logo from './logo.svg'

const Header: React.FC = () => {
	const navigate = useNavigate()
	return (
		<header className='py-6'>
			<div className='flex justify-between items-center text-header text-mainGreen font-roboto'>
				<img onClick={() => navigate('/')} src={logo} alt='logo' />
				<div className='flex gap-16 '>
					<button onClick={() => navigate('/interest')}>Мои интересы</button>
					<button onClick={() => navigate('/chat')}>Чаты</button>
					<button onClick={() => navigate('/publications')}>Публикации</button>
				</div>
				<div className='flex justify-center items-center gap-1'>
					<RiVipLine />
					<User
						onClick={() => navigate('/profile')}
						name='Jane Doe'
						description='Product Designer'
						avatarProps={{
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
						}}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
