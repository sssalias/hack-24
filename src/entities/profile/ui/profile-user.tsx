import { User } from '@nextui-org/user'
import { useProfileStore } from 'src/store/profile'

const ProfileUser: React.FC = () => {

	const {name, surname, ava} = useProfileStore()

	return (
		<User
			name={`${name} ${surname}`}
			avatarProps={{
				src: ava,
				size: 'lg',
			}}
			classNames={{
				name: 'text-4xl',
				description: 'text-md',
			}}
		/>
	)
}

export default ProfileUser
