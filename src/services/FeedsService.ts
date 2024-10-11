import { makeRequest, Methods } from 'src/shared/api'

class FeedsService {
    private readonly path = '/feed'

    public async getFeeds(
        token: string
    ) {
        return await makeRequest(token, Methods.GET, this.path)
    }
}

export default new FeedsService()