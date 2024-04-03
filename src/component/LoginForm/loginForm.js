import { memo, useEffect, useState } from "react"
import { toast } from 'react-toastify';
import './loginForm.scss'
import { loginApi } from "../../service/userService";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [isShowPass, setIsShowPass] = useState(false)
    const [loadingAPI, setLoadingAPI] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (token) {
            navigate("/")
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(email, password)
        if (!email || !password) {
            toast.error("You need to enter the email and password")
            return
        }
        setLoadingAPI(true)
        let res = await loginApi(email, password)
        console.log(res.data)
        const data = res.data
        if (data) {
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("name", data.user.name)
            localStorage.setItem("role", data.user.role)
            localStorage.setItem("user_id", data.user._id)
            localStorage.setItem("token", data.accessToken)
            navigate('/')
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
                    <h1>Login</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Email" required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <i className="fa-solid fa-user icon"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type={isShowPass === true ? "text" : "password"}
                            placeholder="Password" required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <i className={isShowPass === true ? "fa-solid fa-eye icon" : "fa-solid fa-eye-slash icon"}
                            onClick={() => setIsShowPass(!isShowPass)}
                        ></i>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="/">Forgot password</a>
                    </div>

                    <button
                        type="submit"
                        disabled={email && password ? false : true}
                    >{loadingAPI && <i class="fa-solid fa-sync fa-spin"></i>} Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default memo(LoginForm)