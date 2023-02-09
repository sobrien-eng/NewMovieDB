import axios from "axios";
import authHeader from "./authHeader";

const api = "Https://localhost:4000/api/test";

class userService {
    getPublicContent(){
        return axios.get(api + "all-movies");
    }
    getUserContent(){
        return axios.get(api + "user", {headers: authHeader()});
    }
    getAdminContent(){
        return axios.get(api + "admin", {headers: authHeader()});
    }
}

export default new userService();