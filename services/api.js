import axios from "axios";


export default class BackendService {
    constructor(URL='http://localhost:8000'){
        this.client_http = axios.create({
            baseURL: URL
        });
        this.URL = URL
        this.email = "johndoe@gmail.com"
    }

    getPerfil(email) {
        return this.client_http.get(`/perfil/?email=${this.email}`).then((req, res) => {
            return {...req.data, 'avatar_path': this.URL + req.data.avatar_path}
        })
    }

    getCurriculo(empresa) {
        return this.client_http.get(`/curriculo/`).then((req, res) => {
            return req.data['curriculo']
        })
    }

}

