import { makeRequest, Methods } from 'src/shared/api'

class PostService {
    private readonly path = '/posts'

    public async getPosts(
        token: string
    ) {
        return await makeRequest(token, Methods.GET, this.path)
    }

    public async createPost(
        token: string,
        data: any
    ) {
        return await makeRequest(token, Methods.POST, this.path, data)
    }
    public async likePost(
        token:string,
        id:string
    ) {
        return await makeRequest(token, Methods.PUT, `${this.path}/like/${id}`)
    }
    public async sendCom(
        token: string,
        data: any
    ) {
        return await makeRequest(token, Methods.PUT, `${this.path}/comment`, data)
    }
}

export default new PostService()