import { Tabs, Tab } from '@nextui-org/react'
import { ProfileUser } from 'src/entities/profile'
import { ProfilePosts } from 'src/entities/profile/ui'
import { MainLayout } from 'src/layout'

const ProfilePage: React.FC = () => {

    const tabs = [
        {
            id: 'posts',
            label: 'Посты',
            content: <ProfilePosts/>
        },
        {
            id: 'works',
            label: 'Портфолио',
            content: <ProfilePosts/>
        },
        {
            id: 'services',
            label: 'Услуги',
            content: <ProfilePosts/>
        },
        {
            id: 'groups',
            label: 'Единомышленники',
            content: <ProfilePosts/>
        }
    ]

    return (
        <MainLayout>
            <div className='flex flex-col gap-4 items-start text-mainGreen'>
                {/* <h1 className='text-mainGreen text-4xl'>Профиль</h1> */}
                <ProfileUser/>
                <Tabs 
                className='w-full'
                classNames={{
                    tabList: 'w-full justify-center',
                    tab: 'w-fit',
                }} color='success' variant='light' aria-label='profile-tabs' items={tabs}>
                    {item => (
                        <Tab key={item.id} title={item.label}>
                            {item.content}
                        </Tab>
                    )}
                </Tabs>
            </div>
        </MainLayout>
    )
}

export default ProfilePage