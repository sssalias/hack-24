import { Button } from '@nextui-org/button'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { MainLayout } from 'src/layout'
import groupIcon from 'src/pages/index-page/ui/art_3gs7379yweja 1.svg'
import peopleIcon from 'src/pages/index-page/ui/group_6buxgnow9trf 1.svg'
import jobIcon from 'src/pages/index-page/ui/job_kchc5f9r4t47 1.svg'
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
				<h1 className='font-customFont text-benifits text-mainGreen'>
					Наши преимущества
				</h1>
				<div className='flex gap-10 font-customFont text-header text-mainGreen'>
					<article className='flex flex-col items-center px-20 justify-center border-2 max-w-64 rounded-md border-mainGreen '>
						<img src={peopleIcon} alt='asf' />
						<span>Поиск</span>
						<span>единомышленников</span>
					</article>
					<article className='flex flex-col items-center px-20 py-16 justify-center border-2 max-w-64 rounded-md border-mainGreen '>
						<img src={groupIcon} alt='asf' />
						<span>Продажа</span>
						<span>работ</span>
					</article>
					<article className='flex flex-col items-center px-20 justify-center border-2 max-w-64 rounded-md border-mainGreen'>
						<img src={jobIcon} alt='job' />
						<span>Поиск</span>
						<span>вакансий</span>
					</article>
				</div>
			</div>
		</MainLayout>
	)
}

export default IndexPage
