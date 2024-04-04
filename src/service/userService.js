import axiosInstance from './customize-axios'

const loginApi = (email, password) => {
    return axiosInstance.post("/login", { email, password })
}
const registerApi = (data) => {
    return axiosInstance.post("/register", data)
}
const forgotPasswordApi = (data) => {
    return axiosInstance.post("/forgot-password", data)
}
const fetchAllUser = () => {
    return axiosInstance.get("/all-users")
}

const addNewAccount = (userData) => {
    return axiosInstance.post("/create-users", userData); // Sử dụng axiosInstance thay vì axios
}

const editAccount = (updatedData) => {
    return axiosInstance.put(`/update-users`, updatedData);
}

const deleteAccount = (userId) => {
    return axiosInstance.delete(`/delete-users/${userId}`);
}

export { loginApi, fetchAllUser, addNewAccount, editAccount, deleteAccount, registerApi, forgotPasswordApi }

