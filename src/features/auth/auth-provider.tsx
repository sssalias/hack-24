import { useKeycloak } from '@react-keycloak/web'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileService from 'src/services/ProfileService'

type Props = {
    children: React.ReactNode
}
const AuthProvider: React. FC<Props>= props => {
    
    const {keycloak} = useKeycloak()
    const nav = useNavigate()

    useEffect(() => {
        const getUser = async () => {
            if (keycloak.token) {
                try {
                    await ProfileService.getProfle(keycloak.token)
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