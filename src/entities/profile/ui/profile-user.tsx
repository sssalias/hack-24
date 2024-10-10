import { User } from '@nextui-org/user'

const ProfileUser: React.FC = () => {
    return (
        <User
            name='Jane Doe'
            description='Product Designer'
            avatarProps={{
                src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                size: 'lg'
            }}
            classNames={
                {
                    name: 'text-4xl',
                    description: 'text-md',
                }
            }
        />
    )
}

export default ProfileUser