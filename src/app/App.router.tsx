import { Route, Routes } from 'react-router-dom'
import { IndexPage, ProfilePage, InterestPage, ChatPage } from 'src/pages'

interface IRoute {
    path: string
    page: React.ReactNode
}

const RouterData: IRoute[] = [
    {
        path: '/',
        page: <IndexPage/>
    },
    {
        path: '/profile',
        page: <ProfilePage/>
    },
    {
        path: '/interest',
        page: <InterestPage/>
    },
    {
        path: '/chat',
        page: <ChatPage/>
    }
]

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {RouterData.map(el => <Route key={el.path} path={el.path} element={el.page}/>)}
        </Routes>
    )
}
export default AppRouter