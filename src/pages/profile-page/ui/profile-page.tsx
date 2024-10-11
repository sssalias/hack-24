import { Tab, Tabs } from '@nextui-org/react'
import { ProfileUser } from 'src/entities/profile'
import { ProfilePosts } from 'src/entities/profile/ui'
import ProfilePortfolio from 'src/entities/profile/ui/profile-portfolio'
import ProfileProduct from 'src/entities/profile/ui/profile-product'
import ProfileFriends from 'src/entities/profile/ui/profileFriends'
import { MainLayout } from 'src/layout'

const ProfilePage: React.FC = () => {
	const tabs = [
		{
			id: 'posts',
			label: 'Посты',
			content: <ProfilePosts />,
		},
		{
			id: 'works',
			label: 'Портфолио',
			content: <ProfilePortfolio />,
		},
		{
			id: 'services',
			label: 'Услуги',
			content: <ProfileProduct />,
		},
		{
			id: 'groups',
			label: 'Единомышленники',
			content: <ProfileFriends />,
		},
	]

	return (
		<MainLayout>
			<div className='flex flex-col gap-4 items-start text-mainGreen'>
				{/* <h1 className='text-mainGreen text-4xl'>Профиль</h1> */}
				<ProfileUser />
				<Tabs
					className='w-full rounded-3xl '
					classNames={{
						tabList: 'w-full justify-center',
						tab: 'w-full',
						base: 'color-mainGreen',
						cursor: 'w-full bg-[#8EFB21]',
					}}
					variant='underlined'
					color='success'
					aria-label='profile-tabs'
					items={tabs}
				>
					{item => (
						<Tab className='w-full' key={item.id} title={item.label}>
							{item.content}
						</Tab>
					)}
				</Tabs>
			</div>
		</MainLayout>
	)
}

export default ProfilePage
