import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileService from 'src/services/ProfileService'
import { useProfileStore } from 'src/store/profile'

type Props = {
    children: React.ReactNode
}
const AuthProvider: React. FC<Props>= props => {
    
    const {keycloak} = useKeycloak()
    const nav = useNavigate()

    const {setData} = useProfileStore()

    useEffect(() => {
        const getUser = async () => {
            if (keycloak.token) {
                try {
                    const {data} = await ProfileService.getProfle(keycloak.token)
                    setData(data)
                } catch {
                    nav('/auth')
                }
            }
        }
        getUser()
    }, [keycloak.token])

    return (
        <>
            {props.children}
        </>
    )
}

export default AuthProvider