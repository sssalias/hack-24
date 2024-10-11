import {
	Avatar,
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Input,
	User,
	Divider
} from '@nextui-org/react'

import { BiSend } from 'react-icons/bi'
import coms from 'src/entities/profile/ui/Group 22.svg'
import like from 'src/entities/profile/ui/Vector.svg'
import AddPost from './AddPost'
import { useProfileStore } from 'src/store/profile'
import { usePostsStore } from 'src/store/posts'
import PostsService from 'src/services/PostsService'
import { useKeycloak } from '@react-keycloak/web'
import { useState } from 'react'

const ProfilePosts: React.FC = () => {

	const {name, surname, ava} = useProfileStore()

	const {data, updateData} = usePostsStore()

	const {keycloak} = useKeycloak()

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
		<div className='flex flex-col mx-auto w-5/6 gap-4 items-center'>
			<AddPost />
			{data
				.map(el => (
			<Card className='w-full px-4 bg-[#3E3939]'>
				<CardHeader className='justify-between text-white'>
					<User
						name={`${name} ${surname}`}
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
								input: 'border-mainGreen text-white',
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
	)
}

export default ProfilePosts
