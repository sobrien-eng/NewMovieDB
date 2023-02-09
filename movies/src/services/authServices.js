import axios from 'axios';

const api = "Https://localhost:4000/api/auth";

class authService{
    register(username, email, password){
        return axios.post(api + "register", {
            username, email, password 
        });
    }

    async login(username, password){
        const res = await axios.post(api + "login", {
            username, password
        });
        if (res.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
    }

    logout (){
        localStorage.removeItem("user");
    }
}

export default new authService();