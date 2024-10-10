import { Button, User } from '@nextui-org/react'

const ProfileProduct: React.FC = () => {
	return (
		<div>
			<div className='py-6 px-8 bg-mainGray rounded-xl '>
				<div className='flex justify-between py-2 text-white'>
					<p>Создание логотипа</p>
					<p>2000-10000 руб</p>
				</div>
				<hr className='border-mainGreen' />
				<p className='text-white py-2'>
					Вы ищете уникальный и запоминающийся логотип, который станет визитной
					карточкой вашего бизнеса? Наша команда профессиональных дизайнеров
					предлагает услуги по созданию логотипов, которые помогут вам
					выделиться на фоне конкурентов и выразить суть вашего бренда.
				</p>
				<hr className='border-mainGreen' />
				<div className='pt-6 justify-between flex'>
					<User
						name='Jane Doe'
						avatarProps={{
							src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
						}}
					/>
					<div className='gap-2 flex'>
						<Button size='sm' color='danger'>
							Удалить
						</Button>
						<Button size='sm' color='secondary'>
							Редактировать
						</Button>
						<Button size='sm' color='success'>
							Заказать
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileProduct
