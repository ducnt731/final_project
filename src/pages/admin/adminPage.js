import { memo, useEffect, useState } from "react"
import HeaderAdmin from "./headerAdmin"
import SideBar from "./sideBar"

import './adminPage.scss'
import DashBoard from "./dashBoard"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const AdminPage = ({ children, ...prop }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('role') != "admin") {
            toast.error("You must be admin to render this site!")
            navigate('/')
        }
    }, [])
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className="admin-container" {...prop}>
            <div className='grid-container'>
                <HeaderAdmin OpenSidebar={OpenSidebar} />
                <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
                {children}
                <DashBoard />
            </div>
        </div>
    )
}

export default memo(AdminPage)