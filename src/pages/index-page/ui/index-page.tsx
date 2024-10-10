import { Button } from '@nextui-org/button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MainLayout } from 'src/layout'

const IndexPage: React.FC = () => {
	return (
		<MainLayout>
			<div className='flex items-center flex-col pt-36 gap-10'>
				<h1 className='font-customFont text-landing text-mainGreen pt-6'>
					МОЁ ИСКУССТВО!
				</h1>
				<p className='text-mainGreen text-xl'>
					Сервис для поиска персонала и сообщества по интересам
				</p>
				<Button className='bg-mainGreen px-12 w-fit text-black'>
					Создать
					<MdKeyboardArrowRight />
				</Button>
				{/* <div className='flex justify-center'>
					<Button className='max-w-3xl flex justify-center' color='primary'>
						Button
					</Button>
				</div> */}
			</div>
		</MainLayout>
	)
}

export default IndexPage
