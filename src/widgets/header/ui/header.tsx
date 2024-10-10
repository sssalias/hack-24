const Header: React.FC = () => {
	return (
		<header>
			<div className='flex justify-between items-center text-header text-mainGreen font-roboto'>
				<div className='flex gap-28 '>
					<button>LOGO</button>
					<button>Мои интересы</button>
					<button>Чаты</button>
				</div>
				<button>Профиль</button>
			</div>
		</header>
	)
}

export default Header
