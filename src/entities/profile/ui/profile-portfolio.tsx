import { Button } from '@nextui-org/button'
import { FaPlus } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ProfilePortfolio: React.FC = () => {
	return (
		<div className='grid grid-cols-3 gap-10 w-full'>
			<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
				<p className='text-xl'>Дизайнер интерьера</p>
				<Button className='bg-mainGreen px-12 w-fit text-black'>
					Посмотреть
					<MdKeyboardArrowRight />
				</Button>
			</div>
			<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
				<p className='text-xl'>Дизайнер интерьера</p>
				<Button className='bg-mainGreen px-12 w-fit text-black'>
					Посмотреть
					<MdKeyboardArrowRight />
				</Button>
			</div>
			<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
				<p className='text-xl'>Дизайнер интерьера</p>
				<Button className='bg-mainGreen px-12 w-fit text-black'>
					Посмотреть
					<MdKeyboardArrowRight />
				</Button>
			</div>
			<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
				<p className='text-xl'>Дизайнер интерьера</p>
				<Button className='bg-mainGreen px-12 w-fit text-black'>
					Посмотреть
					<MdKeyboardArrowRight />
				</Button>
			</div>
			<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
				<p className='text-xl'>Дизайнер интерьера</p>
				<Button className='bg-mainGreen px-12 w-fit text-black'>
					Посмотреть
					<MdKeyboardArrowRight />
				</Button>
			</div>
			<div className='px-3 py-10 border-3 flex flex-col items-center border-mainGreen gap-10 rounded-3xl '>
				<Button className='bg-mainGreen px-12 w-1/2 h-full text-black'>
					<FaPlus />
				</Button>
			</div>
		</div>
	)
}

export default ProfilePortfolio
