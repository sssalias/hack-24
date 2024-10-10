import { makeRequest, Methods } from 'src/shared/api'

class ProfileService {
    private readonly path = '/profile'

    public async getProfle(
        token: string
    ) {
        return await makeRequest(token, Methods.GET, this.path)
    }

}

export default new ProfileService()