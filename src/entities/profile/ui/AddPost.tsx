import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { useKeycloak } from '@react-keycloak/web'
import { useState } from 'react'
import { FaImage, FaMusic, FaPlus, FaVideo } from 'react-icons/fa'
import PostsService from 'src/services/PostsService'
import { usePostsStore } from 'src/store/posts'

export default function AddPost() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()
	const { updateData } = usePostsStore()

	const {keycloak} = useKeycloak()

	const [data, setData] = useState({
		body: '',
		fileIds: ['632b271d-fe45-408e-b0c4-4af5d6955f54', '632b271d-fe45-408e-b0c4-4af5d6955f54']
	})

	const createPost = async () => {
		if (keycloak.token) {
			await PostsService.createPost(keycloak.token, data)
			updateData(keycloak.token)
		}
	}

	return (
		<div className='flex justify-center'>
			<Button onPress={onOpen} isIconOnly className=' bg-mainGreen rounded-xl'>
				<FaPlus />
			</Button>
			<Modal
				className='bg-mainGray'
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent className='text-white'>
					{onClose => (
						<>
							<ModalHeader className='flex flex-col gap-1'>
								Поделитесь своим творчеством
							</ModalHeader>
							<ModalBody>
								<input
									onChange={e => setData({...data, body: e.target.value})}
									className='h-24 text-white p-2 w-full bg-transparent border-2 border-mainGreen rounded-md'
									placeholder='Введите текст...'
								/>
								<div className='flex justify-around mt-4'>
									<Button isIconOnly>
										<FaImage />
									</Button>
									<Button isIconOnly>
										<FaMusic />
									</Button>
									<Button isIconOnly>
										<FaVideo />
									</Button>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									Закрыть
								</Button>
								<Button color='primary' onPress={() => {
									createPost()
									onClose()
								}}>
									Опубликовать
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	)
}
