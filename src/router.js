import { Router } from "./service/router"
import HomePage from "./pages/users/homePage"
import { Route, Routes } from "react-router-dom"
import MasterLayout from "./pages/users/theme/masterLayout"
import TheaterPage from "./pages/users/theaterPage"
import LoginForm from "./component/LoginForm/loginForm"
import AdminPage from "./pages/admin/adminPage"
import Movie from "./component/Movies/movie"
import Customer from "./component/Customers/customer"
import LayoutNonHeader from "./pages/users/theme/layoutNonHeader/LayoutNonHeader"

const renderAdminRouter = () => {
    const adminRouter = [
        {
            path: Router.ADMIN.ADMINHOME,
            component: <AdminPage />
        },
        {
            path: Router.ADMIN.MOVIES,
            component: <Movie />
        }
    ]
    return (
        <AdminPage>
            <Routes>
                {
                    adminRouter.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </AdminPage>
    )
}

const renderUserRouter = () => {
    const userRouter = [
        {
            path: Router.USER.HOME,
            component: <HomePage />
        },
        {
            path: Router.USER.THEATER,
            component: <TheaterPage />
        },

    ]
    const loginRouter = [{
        path: Router.USER.LOGIN,
        component: <LoginForm />
    }]
    const adminRouter = [
        {
            path: Router.ADMIN.ADMINHOME,
            component: <AdminPage />
        },
        {
            path: Router.ADMIN.MOVIES,
            component: <Movie />
        },
        {
            path: Router.ADMIN.CUSTOMER,
            component: <Customer />
        }
    ]
    return (
        <Routes >

            {
                userRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={<>
                        <MasterLayout>
                            {item.component}
                        </MasterLayout>
                    </>} />
                ))
            },
            {
                loginRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={<>
                        <LayoutNonHeader>
                            {item.component}
                        </LayoutNonHeader>
                    </>} />
                ))
            },
            {
                adminRouter.map((item, key) => (
                    <Route key={key} path={item.path} element={<>
                        <LayoutNonHeader>
                            {item.component}
                        </LayoutNonHeader>
                    </>} />
                ))
            }
        </Routes>
    )
}

const RouterCustom = () => {
    return (
        renderUserRouter()
    )
}

export default RouterCustom