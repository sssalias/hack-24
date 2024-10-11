import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { MainLayout } from 'src/layout'
import {clsx} from 'clsx'
import ProfileService from 'src/services/ProfileService'
import { useKeycloak } from '@react-keycloak/web'

const interests = [
    {
        key: 'WebDesign',
        label: 'Веб Дизайн'
    },
    {
        key: 'Music',
        label: 'Музыка'
    }, 
    {
        key: 'VideoEditing',
        label: 'Видеомонтаж'
    },
    {
        key: 'Animation',
        label: 'Анимация'
    },
    {
        key: 'Photo',
        label: 'Фото'
    },
    {
        key: 'Cinema',
        label: 'Кинематограф'
    },
    {
        key: 'Coding',
        label: 'Программирование'
    }
]

const wants = [
    {
        key: 'Practice',
        label: 'Практика'
    }, 
    {
        key: 'Intership',
        label: 'Стажировка'
    },
    {
        key: 'Friends',
        label: 'Единомышленников'
    },
    {
        key: 'Work',
        label: 'Работу'
    },
    {
        key: 'Freelance',
        label: 'Фриланс'
    }
]

const AuthPage: React.FC = () => {

    const [selectedInterests, setSelectedInterests] = useState<string[]>([])
    const [selectedWants, setSelectedWants] = useState<string[]>([])

    const {keycloak} = useKeycloak()

    const [data, setData] = useState({
        name: '',
        surname: '',
        userInterests: [],
        wantToFind: [],
        avatarId: '632b271d-fe45-408e-b0c4-4af5d6955f54'
    })

    const createProfile = async () => {
        if (keycloak.token) {
            try {
                await ProfileService.createProfile(keycloak.token, {...data, userInterests: selectedInterests, wantToFind: selectedWants})
                window.location.reload()
            } catch (e) {
                console.log(e)
            }
        }
    }

    return (
        <MainLayout>
            <form className='flex flex-col gap-4 items-center' onSubmit={e => e.preventDefault()}>
                <h1 className='font-customFont text-mainGreen text-4xl'>Расскажите о себе</h1>
                <Input onChange={e => setData({...data, name: e.target.value})}  label='Имя'/>
                <Input onChange={e => setData({...data, surname: e.target.value})} label='Фамилия'/>
                <h2 className='text-mainGreen text-2xl'>Мне интересно...</h2>
                <fieldset className='grid grid-cols-4 gap-4 w-full'>
                    {interests.map(el => (
                        <button key={el.key} onClick={() => selectedInterests.includes(el.key) ? setSelectedInterests(selectedInterests.filter(e => e !== el.key)) : setSelectedInterests([...selectedInterests, el.key])} className={clsx(selectedInterests.includes(el.key) ? 'bg-mainGreen' : 'bg-gray-100', 'px-2 py-4 rounded-xl')}>{el.label}</button>
                    ))}
                </fieldset>
                <h2 className='text-mainGreen text-2xl'>Я хочу найти...</h2>
                <fieldset className='grid grid-cols-3 gap-4 w-full justify-center'>
                    {Object.values(wants).map(el => (
                        <button key={el.key} onClick={() => selectedWants.includes(el.key) ? setSelectedWants(selectedWants.filter(e => e !== el.key)) : setSelectedWants([...selectedWants, el.key])} className={clsx(selectedWants.includes(el.key) ? 'bg-mainGreen' : 'bg-gray-100', 'px-2 py-4 rounded-xl')}>
                            {el.label}
                        </button>
                    ))}
                </fieldset>
                <Button
                    className='bg-mainGreen text-white font-semibold text-xl'
                    size='lg'
                    onClick={createProfile}
                >
                    Вперёд!
                </Button>
            </form>
        </MainLayout>
    )
}

export default AuthPage