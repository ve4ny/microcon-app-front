import axios from 'axios'

const API_URL = "http://46.17.248.191:3000/user/login";

const login = async (username, password) => {
        let user = {}
        const response = await axios.post(API_URL, { username, password });
        if (response.data.username !== undefined){
            user = {
                username: response.data.username,
                role: response.data.role,
                fullname: response.data.fullname,
                token: response.data.token
            }
            return user;
        }

        else{
            return user;
        }

}

export default login

