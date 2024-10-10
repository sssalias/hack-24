import { Button } from '@nextui-org/button'
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure, Input } from '@nextui-org/react'
import { FaPlus } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ProfilePortfolio: React.FC = () => {

	const createModal = useDisclosure()
	
	return (
		<>
			<div className='grid grid-cols-3 gap-10 w-full'>
				<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
					<p className='text-xl'>Дизайнер интерьера</p>
					<Button className='bg-mainGreen px-12 w-fit text-black'>
						Посмотреть
						<MdKeyboardArrowRight />
					</Button>
				</div>
				<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
					<Button onClick={createModal.onOpen} className='bg-mainGreen px-12 w-1/2 h-full text-black'>
						<FaPlus />
					</Button>
				</div>
			</div>
			<Modal isOpen={createModal.isOpen} onClose={createModal.onClose}>
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Создать портфолио</ModalHeader>
							<ModalBody>
								<form className='flex flex-col gap-3' onSubmit={e => e.preventDefault()}>
									<Input type='text' label='Название'/>
									<Button>Создать</Button>
								</form>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	)
}

export default ProfilePortfolio
