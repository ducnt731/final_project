import { memo, useEffect, useState } from "react"
import ReactPaginate from 'react-paginate';
import { fetchAllUser } from "../../service/userService"
import ModalEdit from "./modalEdit"
import ModalAdd from "./modalAdd"
import ModalDelete from "./modalDelete"
import './accounts.scss'

const Accounts = () => {
    useEffect(() => {
        getAllUser(1)
    }, [])

    const [isShowModalDelete, setIsShowModalDelete] = useState(false)
    const [dataEdit, setDataEdit] = useState({})
    const [dataDelete, setDataDelete] = useState({})
    const [isShowModalEdit, setIsShowModalEdit] = useState(false)
    const [isShowModalAdd, setIsShowModalAdd] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [totalAccounts, setTotalAccounts] = useState(0)
    const [listAccount, setListAccount] = useState([])
    const [sort, setSort] = useState("asc")
    const [sortField, setSortField] = useState("name")

    const handlePageClick = (e) => {
        getAllUser(e.selected + 1)
    }
    const handleClose = () => {
        setIsShowModalAdd(false)
        setIsShowModalEdit(false)
        setIsShowModalDelete(false)
    }
    const handleAddNew = (account) => {
        setListAccount([account, ...listAccount])
    }
    const handleEdit = (accountEdit) => {
        setDataEdit(accountEdit)
        setIsShowModalEdit(true)
    }
    const handleEditFromModal = (user) => {
        let cloneListAccount = [...listAccount]
        let index = listAccount.findIndex(item => item.id === user.id)
        cloneListAccount[index].name = user.name
        setListAccount(cloneListAccount)
    }
    const handleDelete = (accountDelete) => {
        setIsShowModalDelete(true)
        setDataDelete(accountDelete)
    }
    const handleDEleteFromModal = (user) =>{
        let cloneListAccount = [...listAccount]
        cloneListAccount = cloneListAccount.filter(item => item._id !== user._id)
        setListAccount(cloneListAccount)
    }
    const handleSort = (sort, sortField) =>{
        setSort(sort)
        setSortField(sortField)
        let cloneListAccount = [...listAccount]
        cloneListAccount.sort((a, b) => (a[sort] > b[sortField] ? 1 : -1))
        setListAccount(cloneListAccount)
    }

    const getAllUser = async (page) =>{
        let res = await fetchAllUser(page)
        if (res) {
            setTotalAccounts(res.total)
            setListAccount(res.data)
            setTotalPages(res.total_pages)
        }
    }
    return(
        <>
        <div className="account-container">
            <div className="button-container">
                <div className="btn">
                    <button 
                        type="button"
                        className="button-inner btn btn-primary"
                        onClick={() => setIsShowModalAdd(true)}
                    >Add new</button>
                </div>
            </div>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                    <th scope="col">
                        <div className="sort">
                            <span>Name</span>
                            <div>
                                <i 
                                    className="fa-solid fa-arrow-down-long"
                                    onClick={() => handleSort("desc", "first_name")}
                                ></i>
                                <i 
                                    className="fa-solid fa-arrow-up-long"
                                    onClick={() => handleSort("asc", "first_name")}
                                ></i>
                            </div>
                        </div>
                    </th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Date of birth</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listAccount && listAccount.length > 0 &&
                        listAccount.map((item, index) => {
                            return(
                                <tr key={`users-${index}`}>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.dateOfBirth}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <button className="btn btn-warning" onClick={() => handleEdit(item)}>Edit</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">>"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="<<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
        />
        <ModalAdd
            show = {isShowModalAdd}
            handleClose = {handleClose}
            handleAddNewAccount = {handleAddNew}
        />
        <ModalEdit
            show = {isShowModalEdit}
            dataEditAccount = {dataEdit}
            handleClose = {handleClose}
            handleAccountEdit = {handleEditFromModal}
        />
        <ModalDelete
            show = {isShowModalDelete}
            handleClose = {handleClose}
            dataUserDelete = {dataDelete}
            handleAccountDelete = {handleDEleteFromModal}
        />
        </>
    )
}

export default memo(Accounts)