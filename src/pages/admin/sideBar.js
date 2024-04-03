import { memo } from "react"

const SideBar = ({openSidebarToggle, OpenSidebar}) => {
    return(
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <i className="fa-solid fa-film icon_header"></i> DC Cinema
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/admin">
                    <i className="fa-solid fa-chart-simple icon"></i> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="admin/movie">
                    <i className="fa-solid fa-table-cells-large icon"></i> Movie
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <i className="fa-solid fa-users icon"></i> Staff
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="admin/customer">
                    <i className="fa-solid fa-users icon"></i> Customers
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <i className="fa-solid fa-location-dot icon"></i> Theaters
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <i className="fa-solid fa-ticket icon"></i> Coupon
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    {/* <BsFillGearFill className='icon'/> Setting */}
                </a>
            </li>
        </ul>
    </aside>
    )
}

export default memo(SideBar)