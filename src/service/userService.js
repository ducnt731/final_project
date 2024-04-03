import axios from './customize-axios'

const loginApi = (email, password) => {
    return axios.post("/login", { email, password })
}

const fetchAllUser = () => {
    return axios.get("/users")
}

const addNewAccount = (userData) => {
    return axios.post("/users", userData)
}

const editAccount = (name, phone) => {
    return axios.put("/users", {name, phone})
}

const deleteAccount = (_id) => {
    return axios.delete(`/users/${_id}`)
}

export { loginApi, fetchAllUser, addNewAccount, editAccount, deleteAccount }

// import thư viện axios
// import axios from 'axios';

// // Định nghĩa địa chỉ cơ sở của máy chủ API
// const baseUrl = "http://localhost:3000"; // Thay thế bằng địa chỉ thực tế của máy chủ API của bạn

// // Hàm gọi API để đăng nhập
// const loginApi = (email, password) => {
//     return axios.post(`${baseUrl}/login`, { email, password });
// }

// // Hàm gọi API để lấy tất cả người dùng
// const fetchAllUser = () => {
//     return axios.get(`${baseUrl}/users`);
// }

// // Hàm gọi API để thêm mới một tài khoản
// const addNewAccount = (userData) => {
//     return axios.post(`${baseUrl}/users`, userData);
// }

// // Hàm gọi API để chỉnh sửa một tài khoản
// const editAccount = (userId, updatedData) => {
//     return axios.put(`${baseUrl}/users/${userId}`, updatedData);
// }

// // Hàm gọi API để xóa một tài khoản
// const deleteAccount = (userId) => {
//     return axios.delete(`${baseUrl}/users/${userId}`);
// }

// // Xuất các hàm gọi API để sử dụng ở nơi khác trong ứng dụng
// export { loginApi, fetchAllUser, addNewAccount, editAccount, deleteAccount };