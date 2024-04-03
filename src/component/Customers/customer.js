import { memo, useEffect, useState } from "react"
import { fetchAllUser } from "../../service/userService"
import './customer.scss'

const Customer = () => {
    useEffect(() => {
        getAllUser()
    }, [])

    const [listUser, setListUser] = useState([])

    const getAllUser = async () =>{
        let res = await fetchAllUser()
        if (res) {
            setListUser(res.data)
        }
    }
    return(
        <div className="customer-container">
            <div className="button-container">
                <button type="button" className="button btn btn-primary">Edit customer</button>
                <button type="button" className="button btn btn-primary">Delete customer</button>
            </div>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return(
                                <tr key={`users-${index}`}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default memo(Customer)