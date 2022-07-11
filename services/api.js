import axios from "axios";


export default class BackendService {
    constructor(URL='http://localhost:8000'){
        this.instance = axios.create({
            baseURL: URL
        });
        this.URL = URL
    }

    getPerfil(email) {
        return this.instance.get(`/perfil/?email=${email}`).then((req, res) => {
            return {...req.data, 'avatar_path': this.URL + req.data.avatar_path}
        })
    }

}

