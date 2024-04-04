import { memo, useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editAccount } from "../../service/userService";
import { toast } from "react-toastify";
import { formatDate } from "../../utils/formatDate";

const ModalEdit = (props) => {
    const { show, handleClose, dataEditAccount, handleAccountEdit } = props
    const [data, setData] = useState(dataEditAccount)




    useEffect(() => {
        if (dataEditAccount) {
            setData(dataEditAccount)
        }
    }, [dataEditAccount])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Accounts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-edit">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" value={data.name} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <input type="text" name="phone" className="form-control" value={data.phone} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="text" value={data.email} disabled className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="text" disabled value={data.password} className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date of birth</label>
                            <input type="date" name="dateOfBirth" value={formatDate(new Date(data.dateOfBirth))} className="form-control" onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender</label>
                            <select name="gender" value={data.gender} className="form-select" onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} >
                                <option value={"female"}>Female</option>
                                <option value={"male"}>Male</option>
                                <option value={"other"}>Other</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Role</label>
                            <select value={data.role} name="role" className="form-select" onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }}>
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
                    <Button variant="primary" onClick={() => handleAccountEdit(data)}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default memo(ModalEdit)