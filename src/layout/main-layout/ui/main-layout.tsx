import { Header } from 'src/widgets'

type Props = {
    children: React.ReactNode
}
const MainLayout: React. FC<Props>= props => {
    return (
        <div className='w-full'>
            <Header/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default MainLayout