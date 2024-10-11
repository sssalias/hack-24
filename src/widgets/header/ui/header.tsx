import { User } from '@nextui-org/user'
import { RiVipLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import logo from './logo.svg'
import { useProfileStore } from 'src/store/profile'
const Header: React.FC = () => {
	const navigate = useNavigate()

	const {name, surname, ava} = useProfileStore()

	return (
		<header className='py-6'>
			<div className='flex justify-between items-center text-header text-mainGreen font-roboto'>
				<img onClick={() => navigate('/')} src={logo} alt='logo' />
				<div className='flex gap-16 '>
					{
						name !== undefined ?
						<>
							<button onClick={() => navigate('/interest')}>Мои интересы</button>
							<button onClick={() => navigate('/chats')}>Чаты</button>
							<button onClick={() => navigate('/publications')}>Публикации</button>
						</>
						:
						null
					}
				</div>
				{
					name !== undefined ?
					<User
					className='cursor-pointer'
					onClick={() => navigate('/profile')}
					name={`${name} ${surname}`}
					avatarProps={{
						src: ava,
					}}
					/>
					:
					null
				}
			</div>
		</header>
	)
}

export default Header
