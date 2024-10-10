import { ReactKeycloakProvider } from '@react-keycloak/web'
import { authClient } from 'src/processes/auth/api'

type Props = {
    children: React.ReactNode
}
const KKAuthProvider: React. FC<Props>= props => {
    return (
        <ReactKeycloakProvider authClient={authClient} initOptions={{onLoad: 'login-required'}}>
            {props.children}
        </ReactKeycloakProvider>
    )
}

export default KKAuthProvider