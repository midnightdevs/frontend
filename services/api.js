import axios from "axios";


export default class BackendService {
    constructor(URL='http://localhost:8000'){
        this.instance = axios.create({
            baseURL: URL
        });
    }

    getPerfil() {
        this.instance.get('/perfil/').then((req, res) => {
            console.log(req)
        })
    }

}

