import { memo } from "react"
import './header.scss'
import Avatar from '../../../../assets/img_avatar.png'
import { Button, Dropdown } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">

                <div className="container-fluid">

                    <button
                        data-mdb-collapse-init
                        className="navbar-toggler"
                        type="button"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <a className="navbar-brand mt-2 mt-lg-0" href="/">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                                height="15"
                                alt="MDB Logo"
                                loading="lazy"
                            />
                        </a>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Theaters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">My ticket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Breaking news</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-flex align-items-center">
                        {localStorage.getItem("token") ?

                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                        className="rounded-circle"
                                        height="25"
                                        alt="Black and White Portrait of a Man"
                                        loading="lazy"
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                                    <Dropdown.Item onClick={() => {
                                        localStorage.clear()
                                        navigate('/')
                                    }}>Log out</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown> : <Button variant="primary" onClick={() => {
                                navigate("/login")
                            }}>Login</Button>
                        }
                    </div>

                </div>

            </nav>
            {/* <div className="header-top">
                <a href="/login">Login</a>
            </div> */}

        </div>
    )
}

export default memo(Header)