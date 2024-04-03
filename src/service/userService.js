import axios from './customize-axios'

const loginApi = (email, password) => {
    return axios.post("/login", { email, password })
}

const fetchAllUser = () => {
    return axios.get("api/users?page=1")
}

export { loginApi, fetchAllUser }