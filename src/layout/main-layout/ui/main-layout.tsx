import { Header } from 'src/widgets'

type Props = {
    children: React.ReactNode
}
const MainLayout: React. FC<Props>= props => {
    return (
        <div className='w-3/4 mx-auto'>
            <Header/>
            <main className='flex flex-col justify-center'>
                {props.children}
            </main>
        </div>
    )
}

export default MainLayout