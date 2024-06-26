import { memo } from "react"

const HeaderAdmin = ({OpenSidebar}) => {
    return(
        <header className='header'>
            <div className='menu-icon'>
                <i className="fa-solid fa-align-justify icon" onClick={OpenSidebar}></i>
            </div>
            <div className='header-left'>
                <form className="search d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-dark" type="submit">Search</button>
                </form>
            </div>
            <div className='header-right'>
                <i className="fa-solid fa-bell icon"></i>
                <i className="fa-solid fa-envelope icon"></i>
                <i className="fa-solid fa-circle-user icon"></i>
            </div>
        </header>
    )
}

export default memo(HeaderAdmin)