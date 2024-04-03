import { memo, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addNewAccount } from "../../service/userService";
import { toast } from "react-toastify";

const ModalAdd = (props) => {
    const {show, handleClose, handleAddNewAccount} = props
    // const [name, setName] = useState("")
    // const [phone, setPhone] = useState("")
    const [userData, setUserData] = useState("")

    const handleSaveAccount = async () => {
        let res = await addNewAccount(userData)
        if (res && res.id) {
            handleClose()
            setUserData('')
            toast.success("Create new account successful!!!")
            handleAddNewAccount({userData})
        }else{
            toast.error("Fail to create new account")
        }
    }

    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>New Accounts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-add">
                <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={userData} onChange={(e) => setUserData(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date of birth</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select className="form-select">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select className="form-select">
                            <option>Customer</option>
                            <option>Staff</option>
                            <option>Admin</option>
                            <option>Manager</option>
                        </select>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={() => handleSaveAccount()}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default memo(ModalAdd)