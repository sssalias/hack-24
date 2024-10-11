import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Input,
	User,
} from '@nextui-org/react'
import img from 'src/entities/profile/ui/Rectangle 45.png'
import { MainLayout } from 'src/layout'

import { BiSend } from 'react-icons/bi'
import coms from 'src/entities/profile/ui/Group 22.svg'
import like from 'src/entities/profile/ui/Vector.svg'
import { useKeycloak } from '@react-keycloak/web'
import { useFeedsStore } from 'src/store/feeds'
import { useEffect, useState } from 'react'
import FeedsService from 'src/services/FeedsService'
import { useProfileStore } from 'src/store/profile'
import PostsService from 'src/services/PostsService'

const InterestPage: React.FC = () => {

	const {keycloak} = useKeycloak()
	const {data, setData, updateData} = useFeedsStore()

	useEffect(() => {
		const getFeeds = async () => {
			if (keycloak.token) {
				const {data} = await FeedsService.getFeeds(keycloak.token)
				setData(data)
			}
		}
		getFeeds()
	}, [keycloak.token])

	const {ava} = useProfileStore()

	const [body, setBody] = useState<string>('')

	const likePost = async (id:string) => {
		if (keycloak.token) {
			await PostsService.likePost(keycloak.token, id)
			updateData(keycloak.token)
		}
	}

	const sendCom = async (postId: string) => {
		if (keycloak.token) {
			await PostsService.sendCom(keycloak.token, {postId, body})
			updateData(keycloak.token)
		}
	}

	return (
		<MainLayout>
			<div className='flex flex-col items-center gap-10'>
				<div className='flex flex-col items-center justify-center'>
					<h1 className='text-mainGreen  text-landing font-customFont '>
						Мои интересы
					</h1>
					<input
						className='border-2 p-2 max-w-64 text-white bg-transparent border-mainGreen rounded-md'
						placeholder='Поиск...'
						type='text'
					/>
				</div>
				<div className='flex flex-col mx-auto w-5/6 gap-4 items-center'>
					{data
						.map(el => (
					<Card className='w-full px-4 bg-[#3E3939]'>
						<CardHeader className='justify-between text-white'>
							<User
								name={`${el.author.name} ${el.author.surname}`}
								avatarProps={{
									src: ava,
								}}
							/>
							{/* <span>10.10.24</span> */}
						</CardHeader>
						<CardBody className='flex flex-col gap-3 w-full'>
							{/* <img src={img} className='h-[400px] object-cover rounded-md' /> */}
							<span className='text-white'>
								{el.body}
							</span>
							<div className='flex gap-3'>
								<Button onClick={() => likePost(el.id)} variant='light' className='text-white'>
									<img src={like} alt='d' />
									<span>{el.likes.length}</span>
								</Button>
								<Button variant='light' className='text-white'>
									<img src={coms} alt='d' />
									<span>{el.comments.length}</span>
								</Button>
							</div>
						</CardBody>
						<CardFooter className='flex flex-col gap-3'>
							<Divider className='bg-white' orientation='horizontal'/>
							{el.comments.map((com:any) => (
								<div className='flex flex-col mr-auto pl-5'>
									<span className='text-white'>
										{com.body}
									</span>
									{/* <span className='text-gray-400'>10.10.24 19:32</span> */}
								</div>
							))}
							{/* <div className='flex flex-col'>
								<span className='text-white'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
									dolorum. Earum porro, ullam hic quis qui voluptatibus eos.
									Cupiditate aspernatur tempore magni inventore, odit esse in iusto
									delectus! Sunt, illum!
								</span>
								<span className='text-gray-400'>10.10.24 19:32</span>
							</div> */}
							{/* <Button className='text-mainGreen w-fit mr-auto px-0' variant='light'>
								Показать еще комментарии
							</Button> */}
							<div className='flex items-center gap-3 w-full'>
								<Avatar src={ava} />
								<Input
									onChange={e => setBody(e.target.value)}
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
									onClick={() => sendCom(el.id)}
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
					)).reverse()}
				</div>
			</div>
		</MainLayout>
	)
}

export default InterestPage
