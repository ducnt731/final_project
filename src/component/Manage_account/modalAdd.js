import { memo, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { formatDate } from "../../utils/formatDate";

const ModalAdd = (props) => {
    const { show, handleClose, handleAddNewAccount } = props
    // const [name, setName] = useState("")
    // const [phone, setPhone] = useState("")
    const [data, setData] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "password": "",
        "dateOfBirth": "",
        "gender": "female",
        "role": "customer",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        
    }


    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Accounts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-edit">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            value={data.name && data.name} 
                            onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input 
                            type="text" 
                            name="phone" 
                            className="form-control" 
                            value={data.phone && data.phone} 
                            onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input name="email" type="email" value={data.email && data.email} className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" name="password" min={6} value={data.password && data.password} className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of birth</label>
                            <input type="date" name="dateOfBirth" value={data.dateOfBirth && formatDate(new Date(data.dateOfBirth))} className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select name="gender" defaultValue={"female"} value={data.gender && data.gender} className="form-select" onChange={handleChange} >
                                <option value={"female"}>Female</option>
                                <option value={"male"}>Male</option>
                                <option value={"other"}>Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Role</label>
                            <select defaultValue={"customer"} value={data.role && data.role} name="role" className="form-select" onChange={handleChange}>
                                <option value={"customer"}>Customer</option>
                                <option value={"staff"}>Staff</option>
                                <option value={"admin"}>Admin</option>
                                <option value={"manager"}>Manager</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleAddNewAccount(data)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default memo(ModalAdd)