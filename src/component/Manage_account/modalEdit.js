import { memo, useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editAccount } from "../../service/userService";
import { toast } from "react-toastify";

const ModalEdit = (props) => {
    const {show, handleClose, dataEditAccount, handleAccountEdit} = props
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const handleEditAccount = async () => {
        let res = await editAccount(name, phone)
        if (res && res.updatedAt) {
            handleAccountEdit({
                name: name,
                id: dataEditAccount.id
            })
            handleClose()
            toast.success("Update successful!!!")
        }
    }

    useEffect(() => {
        if (show) {
            setName(dataEditAccount.name)
        }
    }, [dataEditAccount])

    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Accounts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="body-edit">
                <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input type="text" className="form-control"value={phone} onChange={(e) => setPhone(e.target.value)}/>
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
            <Button variant="primary" onClick={() => handleEditAccount()}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}

export default memo(ModalEdit)