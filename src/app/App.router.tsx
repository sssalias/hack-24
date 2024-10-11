import { Route, Routes } from 'react-router-dom'
import {
	AuthPage,
	ChatPage,
	IndexPage,
	InterestPage,
	ProfilePage,
} from 'src/pages'
import { Publications } from 'src/pages/publications'

interface IRoute {
	path: string
	page: React.ReactNode
}

const RouterData: IRoute[] = [
	{
		path: '/',
		page: <IndexPage />,
	},
	{
		path: '/profile',
		page: <ProfilePage />,
	},
	{
		path: '/interest',
		page: <InterestPage />,
	},
	{
		path: '/chat',
		page: <ChatPage />,
	},
	{
		path: '/auth',
		page: <AuthPage />,
	},
	{
		path: '/publications',
		page: <Publications />,
	},
]

const AppRouter: React.FC = () => {
	return (
		<Routes>
			{RouterData.map(el => (
				<Route key={el.path} path={el.path} element={el.page} />
			))}
		</Routes>
	)
}
export default AppRouter
