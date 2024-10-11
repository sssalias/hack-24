import { makeRequest, Methods } from 'src/shared/api'

class ProfileService {
    private readonly path = '/profiles'

    public async getProfle(
        token: string
    ) {
        return await makeRequest(token, Methods.GET, this.path)
    }

    public async createProfile(
        token: string,
        data: any
    ) {
        return await makeRequest(token, Methods.POST, this.path, data)
    }

    public async getProfileById(
        token: string,
        id: string
    ) {
        return await makeRequest(token, Methods.GET, `${this.path}/${id}`)
    }
}

export default new ProfileService()