import { Header } from 'src/widgets'

type Props = {
	children: React.ReactNode
}
const MainLayout: React.FC<Props> = props => {
	return (
		<div className='bg-mainBlack'>
			<div className='w-5/6 mx-auto '>
				<Header />
				<main className='flex flex-col justify-center'>{props.children}</main>
			</div>
		</div>
	)
}

export default MainLayout
