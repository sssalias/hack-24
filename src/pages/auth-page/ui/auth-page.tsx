import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { MainLayout } from 'src/layout'
import {clsx} from 'clsx'

const interests = [
    'Веб Дизайн',
    'Музыка',
    'Рисование и иллюстрации',
    'Видеомонтаж',
    'Графический дизайн',
    'Дизайнер',
    'Анимация',
    'Литература',
    'Фотография',
    'Кинематограф'
]

const wants = [
    'Практика',
    'Стажировка',
    'Единомышленников',
    'Сотрудников',
    'Работу',
    'Заказы'
]

const AuthPage: React.FC = () => {

    const [selectedInterests, setSelectedInterests] = useState<string[]>([])
    const [selectedWants, setSelectedWants] = useState<string[]>([])

    return (
        <MainLayout>
            <form className='flex flex-col gap-4 items-center' onSubmit={e => e.preventDefault()}>
                <h1 className='font-customFont text-mainGreen text-4xl'>Расскажите о себе</h1>
                <Input label='Имя'/>
                <Input label='Фамилия'/>
                <h2 className='text-mainGreen text-2xl'>Мне интересно...</h2>
                <fieldset className='grid grid-cols-4 gap-4 w-full'>
                    {interests.map(el => (
                        <button key={el} onClick={() => selectedInterests.includes(el) ? setSelectedInterests(selectedInterests.filter(e => e !== el)) : setSelectedInterests([...selectedInterests, el])} className={clsx(selectedInterests.includes(el) ? 'bg-mainGreen' : 'bg-gray-100', 'px-2 py-4 rounded-xl')}>
                            {el}
                        </button>
                    ))}
                </fieldset>
                <h2 className='text-mainGreen text-2xl'>Я хочу найти...</h2>
                <fieldset className='grid grid-cols-3 gap-4 w-full justify-center'>
                    {wants.map(el => (
                        <button key={el} onClick={() => selectedWants.includes(el) ? setSelectedWants(selectedWants.filter(e => e !== el)) : setSelectedWants([...selectedWants, el])} className={clsx(selectedWants.includes(el) ? 'bg-mainGreen' : 'bg-gray-100', 'px-2 py-4 rounded-xl')}>
                            {el}
                        </button>
                    ))}
                </fieldset>
                <Button
                    className='bg-mainGreen text-white font-semibold text-xl'
                    size='lg'
                >
                    Вперёд!
                </Button>
            </form>
        </MainLayout>
    )
}

export default AuthPage