import { MainLayout } from 'src/layout'

const IndexPage: React.FC = () => {
	return (
		<MainLayout>
			<div className='flex justify-center pt-52'>
				<h1 className='font-customFont text-landing text-mainGreen px-6'>
					МОЁ ИСКУССТВО!
				</h1>
			</div>
		</MainLayout>
	)
}

export default IndexPage
