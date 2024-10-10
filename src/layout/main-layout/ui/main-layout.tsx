import { Header } from 'src/widgets'

type Props = {
	children: React.ReactNode
}
const MainLayout: React.FC<Props> = props => {
	return (
		<div className='bg-mainBlack min-h-screen'>
			<div className='w-3/5 mx-auto '>
				<Header />
				<main className='flex flex-col justify-center mt-4'>{props.children}</main>
			</div>
		</div>
	)
}

export default MainLayout
