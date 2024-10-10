import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { FaImage, FaMusic, FaPlus, FaVideo } from 'react-icons/fa'

export default function AddPost() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

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
								<Button color='primary' onPress={onClose}>
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
