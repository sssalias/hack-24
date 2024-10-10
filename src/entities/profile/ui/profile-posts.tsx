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

import { BiSend } from 'react-icons/bi'
import coms from 'src/entities/profile/ui/Group 22.svg'
import like from 'src/entities/profile/ui/Vector.svg'
import AddPost from './AddPost'

const ProfilePosts: React.FC = () => {
	return (
		<div className='flex flex-col mx-auto w-5/6 gap-4 items-center'>
			<AddPost />
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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
						debitis temporibus excepturi saepe necessitatibus distinctio
						perferendis suscipit doloremque ex explicabo molestiae, est repellat
						libero non officiis rem sequi provident obcaecati?
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
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
							dolorum. Earum porro, ullam hic quis qui voluptatibus eos.
							Cupiditate aspernatur tempore magni inventore, odit esse in iusto
							delectus! Sunt, illum!
						</span>
						<span className='text-gray-400'>10.10.24 19:32</span>
					</div>
					<Button className='text-mainGreen w-fit mr-auto px-0' variant='light'>
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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
						debitis temporibus excepturi saepe necessitatibus distinctio
						perferendis suscipit doloremque ex explicabo molestiae, est repellat
						libero non officiis rem sequi provident obcaecati?
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
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
							dolorum. Earum porro, ullam hic quis qui voluptatibus eos.
							Cupiditate aspernatur tempore magni inventore, odit esse in iusto
							delectus! Sunt, illum!
						</span>
						<span className='text-gray-400'>10.10.24 19:32</span>
					</div>
					<Button className='text-mainGreen w-fit mr-auto px-0' variant='light'>
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
	)
}

export default ProfilePosts
