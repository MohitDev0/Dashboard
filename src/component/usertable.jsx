import React, { useEffect, useState } from "react";
import "./css/usertable.css";
import greendoticon from './images/greendoticon.png';
import rediconangle from './images/rediconangle.png';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Form from "./form";

let edata;
let searchdata = "";

function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function (a) { return a.toUpperCase(); });
};


function UserTable({ handlestatus, change }) {
    let data = [];
    let [page, setPage] = useState(1);
    function scrollToEnd() {
        setPage(page + 1);
    }
    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            scrollToEnd();
        }
    }
    let [EditUser, setEditUser] = useState(false);
    let [newstart, setnewstart] = useState(false);
    useEffect(() => {
        setnewstart(false);
    }, [newstart])

    for (let i = 0; i < localStorage.length; i++) {
        let user = localStorage.key(i);
        let temp = JSON.parse(localStorage.getItem(user));

        if (temp.name.includes(searchdata) || temp.name.includes(capitalize(searchdata)) || temp.department.includes(searchdata) || temp.department.includes(capitalize(searchdata))) {
            data.push(temp);
        }

        data.sort(function (a, b) {
            if (a.status < b.status) {
                return -1;
            }
            if (a.status > b.status) {
                return 1;
            }
            return 0;
        });

    }
    function handleSearchbar(e) {
        let val = e.target.value;
        searchdata = val;
        setnewstart(true);
    }

    function changestatus(e) {
        let temp = JSON.parse(localStorage.getItem(e));
        if (temp.status === "Active") {
            temp.status = "Not Active";
        } else {
            temp.status = "Active";
        }
        localStorage.setItem(temp.name, JSON.stringify(temp));
    }
    function DeleteItem(e) {
        localStorage.removeItem(e);
    }
    function handleEditClick(e) {
        setEditUser(true);
        edata = JSON.parse(localStorage.getItem(e));
    }
    function updateUser(e) {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let approch = e.target;
        let newName = capitalize(approch.name.value);
        let obj = {
            name: newName,
            age: approch.age.value,
            department: approch.department.value,
            status: approch.status.value,
            phone_no: approch.phone_no.value,
            emailAddress: approch.emailAddress.value,
        }
        localStorage.setItem(obj.name, JSON.stringify(obj));
        setEditUser(false);
    }

    return (
        <div>
            <div id="search">
                <input type="text" placeholder="search" onChange={handleSearchbar}></input>
            </div>
            <table id="customers">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Status</th>
                        <th>Phone No</th>
                        <th>Email Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {data.length > 0 && data.map((final, index) => {
                        return (
                            <tr key={index}>
                                <td>{final.name}</td>
                                <td>{final.age}</td>
                                <td>{final.department}</td>

                                <td className="chngstatus" onClick={() => { handlestatus(index); changestatus(final.name);}}
                                    style={{ cursor: "Pointer" }}> {final.status}
                                    <img src={final.status === "Active" ? greendoticon : rediconangle} alt="Img Error"></img>
                                </td>

                                <td>{final.phone_no}</td>
                                <td>{final.emailAddress}</td>
                                <td style={{ cursor: "Pointer" }} onClick={() => { handleEditClick(final.name); change(true) }}><EditIcon /></td>
                                <td style={{ cursor: "Pointer" }} onClick={() => {
                                    DeleteItem(final.name);
                                    setnewstart(true);
                                    change(true);
                                }}><DeleteIcon /></td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            <div className="body">
                {EditUser && <Form CloseModal={setEditUser} SubmitForm={updateUser} props={edata} />}
            </div>
        </div>
    );

}


export default UserTable;