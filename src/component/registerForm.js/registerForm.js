import { memo, useEffect, useState } from "react"
import { toast } from 'react-toastify';
import './loginForm.scss'
import { loginApi, registerApi } from "../../service/userService";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [data, setData] = useState({ role: 'customer', gender: 'female' })
    const [isShowPass, setIsShowPass] = useState(false)
    const [loadingAPI, setLoadingAPI] = useState(false)
    const navigate = useNavigate()
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            navigate("/")
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(data)
        let check = false
        Object.keys(data).map((key) => {
            console.log(data[key])
            if (!data[key] || data[key] == '') {

                check = true
            }
        })
        if (!check) {
            try {
                setLoadingAPI(true)
                let res = await registerApi(data)
                if (res) {
                    toast.success("Register success!")
                    navigate("/login")
                }
            } catch (error) {

            }
        } else {
            toast.error("You need to enter all field!")
        }




        // if (res && res.token) {
        //     localStorage.setItem("token", res.token)
        //     navigate("/")
        // } else {
        //     if (res && res.status === 400) {
        //         toast.error(res.data.error)
        //     }
        // }
        setLoadingAPI(false)
    }

    return (
        <div className="wrapper">
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <h1>Sign up</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name" required
                            value={data && data.name}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="input-box">
                        <input
                            type="number"
                            name="phone"
                            placeholder="phone" required
                            value={data && data.phone}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="input-box">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email" required
                            value={data && data.email}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="input-box">
                        <input
                            type={isShowPass === true ? "text" : "password"}
                            name="password"
                            placeholder="Password" required
                            value={data && data.password}
                            onChange={handleChange}
                        />
                        <i className={isShowPass === true ? "fa-solid fa-eye icon" : "fa-solid fa-eye-slash icon"}
                            onClick={() => setIsShowPass(!isShowPass)}
                        ></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date Of Birth" required
                            value={data && data.dateOfBirth}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="input-box">
                        <select name="gender" defaultValue={"female"} value={data && data.gender} className="form-select" onChange={handleChange} >
                            <option value={"female"}>Female</option>
                            <option value={"male"}>Male</option>
                            <option value={"other"}>Other</option>
                        </select>
                    </div>



                    <button
                        type="submit"

                    >{loadingAPI && <i class="fa-solid fa-sync fa-spin"></i>} Register</button>

                </form>
            </div>
        </div>
    )
}

export default memo(RegisterForm)