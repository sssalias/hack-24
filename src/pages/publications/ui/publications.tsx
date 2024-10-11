import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
	User,
} from '@nextui-org/react'
import img from 'src/entities/profile/ui/Rectangle 45.png'
import { MainLayout } from 'src/layout'

import { BiSend } from 'react-icons/bi'
import coms from 'src/entities/profile/ui/Group 22.svg'
import like from 'src/entities/profile/ui/Vector.svg'

const InterestPage: React.FC = () => {
	return (
		<MainLayout>
			<div className='flex flex-col items-center gap-6'>
				<h1 className='text-mainGreen pt-0 mt-0 text-landing font-customFont flex justify-center'>
					Все публикации
				</h1>
				<input
					type='text'
					placeholder='Поиск'
					className='border opacity-50 border-gray-400 rounded-lg p-2 bg-darkGray text-white'
				/>{' '}
				<div className='flex flex-col mx-auto w-5/6 gap-4 items-center'>
					<Card className='w-full px-4 bg-[#3E3939]'>
						<CardHeader className='justify-between text-white'>
							<User
								name='Jane Doe'
								avatarProps={{
									src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
								}}
							/>
							<span>10.10.24</span>
						</CardHeader>
						<CardBody className='flex flex-col gap-3 w-full'>
							<img src={img} className='h-[400px] object-cover rounded-md' />
							<span className='text-white'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Accusamus debitis temporibus excepturi saepe necessitatibus
								distinctio perferendis suscipit doloremque ex explicabo
								molestiae, est repellat libero non officiis rem sequi provident
								obcaecati?
							</span>
							<div className='flex gap-3'>
								<Button variant='light' className='text-white'>
									<img src={like} alt='d' />
									<span>200</span>
								</Button>
								<Button variant='light' className='text-white'>
									<img src={coms} alt='d' />
									<span>200</span>
								</Button>
							</div>
						</CardBody>
						<CardFooter className='flex flex-col gap-3'>
							<div className='flex flex-col'>
								<span className='text-white'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Nobis, dolorum. Earum porro, ullam hic quis qui voluptatibus
									eos. Cupiditate aspernatur tempore magni inventore, odit esse
									in iusto delectus! Sunt, illum!
								</span>
								<span className='text-gray-400'>10.10.24 19:32</span>
							</div>
							<Button
								className='text-mainGreen w-fit mr-auto px-0'
								variant='light'
							>
								Показать еще комментарии
							</Button>
							<div className='flex items-center gap-3 w-full'>
								<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
								<Input
									type='text'
									variant='bordered'
									placeholder='Оставить комментарий...'
									color='success'
									className='flex-grow'
									classNames={{
										input: 'border-mainGreen',
									}}
								/>
								<Button
									isIconOnly
									variant='light'
									className='text-mainGreen'
									size='lg'
								>
									<BiSend />
								</Button>
							</div>
						</CardFooter>
					</Card>
					<Card className='w-full px-4 bg-[#3E3939]'>
						<CardHeader className='justify-between text-white'>
							<User
								name='Jane Doe'
								avatarProps={{
									src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
								}}
							/>
							<span>10.10.24</span>
						</CardHeader>
						<CardBody className='flex flex-col gap-3 w-full'>
							<img src={img} className='h-[400px] object-cover rounded-md' />
							<span className='text-white'>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Accusamus debitis temporibus excepturi saepe necessitatibus
								distinctio perferendis suscipit doloremque ex explicabo
								molestiae, est repellat libero non officiis rem sequi provident
								obcaecati?
							</span>
							<div className='flex gap-3'>
								<Button variant='light' className='text-white'>
									<img src={like} alt='d' />
									<span>200</span>
								</Button>
								<Button variant='light' className='text-white'>
									<img src={coms} alt='d' />
									<span>200</span>
								</Button>
							</div>
						</CardBody>
						<CardFooter className='flex flex-col gap-3'>
							<div className='flex flex-col'>
								<span className='text-white'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Nobis, dolorum. Earum porro, ullam hic quis qui voluptatibus
									eos. Cupiditate aspernatur tempore magni inventore, odit esse
									in iusto delectus! Sunt, illum!
								</span>
								<span className='text-gray-400'>10.10.24 19:32</span>
							</div>
							<Button
								className='text-mainGreen w-fit mr-auto px-0'
								variant='light'
							>
								Показать еще комментарии
							</Button>
							<div className='flex items-center gap-3 w-full'>
								<Avatar src='https://i.pravatar.cc/150?u=a04258114e29026702d' />
								<Input
									type='text'
									variant='bordered'
									placeholder='Оставить комментарий...'
									color='success'
									className='flex-grow'
									classNames={{
										input: 'border-mainGreen',
									}}
								/>
								<Button
									isIconOnly
									variant='light'
									className='text-mainGreen'
									size='lg'
								>
									<BiSend />
								</Button>
							</div>
						</CardFooter>
					</Card>
				</div>
			</div>
		</MainLayout>
	)
}

export default InterestPage
