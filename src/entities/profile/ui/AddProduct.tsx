import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa'

export default function AddProduct() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	return (
		<div className='flex justify-center'>
			<Button onPress={onOpen} isIconOnly className=' bg-mainGreen rounded-xl'>
				<FaPlus />
			</Button>
			<Modal
				className='bg-mainGray flex justify-center items-center'
				isOpen={isOpen}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader className='flex text-white flex-col gap-1'>
								Создание товара
							</ModalHeader>
							<ModalBody className='w-full '>
								<input
									placeholder='Название'
									className='border-2 p-2 text-white bg-transparent border-mainGreen rounded-md'
								></input>
								<input
									placeholder='Описание'
									className='border-2 p-2 text-white h-24 bg-transparent  border-mainGreen rounded-md'
								></input>
								<input
									placeholder='Цена'
									className='border-2 p-2 text-white bg-transparent border-mainGreen rounded-md'
								></input>
							</ModalBody>
							<ModalFooter>
								<Button color='danger' variant='light' onPress={onClose}>
									Close
								</Button>
								<Button color='primary' onPress={onClose}>
									Action
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</div>
	)
}
