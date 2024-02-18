import React, { useEffect, useState } from "react";
import "./App.css";
import TotalEmployee from "./component/total_employee";
import ActiveCard from "./component/active_card";
import Modal from "./component/model";
import UserTable from "./component/usertable";
const { employee } = require("./component/data");
employee.filter((elm) => {
    return localStorage.setItem(elm.name, JSON.stringify(elm));
})

function App() {
    const [openModel, setOpenModel] = useState(false);
    const [change, setchange] = useState(false);
    useEffect(() => {
        setchange(false);
    }, [change])
    function HandleStatus(e) {
        let temp = document.getElementsByClassName("chngstatus")[e].innerText;
        if (temp === "Active") {
            document.getElementsByClassName("chngstatus")[e].innerHTML = "Not Active<img src='/static/media/rediconangle.6fb09dd272d612fd5ee0.png'>";
        } else {
            document.getElementsByClassName("chngstatus")[e].innerHTML = "Active<img src='/static/media/greendoticon.a37db02d3f0828829e7b.png'>";
        }

    }
    return (
        <div className="parent_container">
            <div className="parent_inner_container">
                <TotalEmployee />
                <ActiveCard />
                <button id="addEmployee" onClick={() => {
                    setOpenModel(true);
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }}>Add Employee</button>
                {openModel && <Modal closeModal={setOpenModel} />}
            </div>
            <div className="parent_userTable">
                <UserTable handlestatus={HandleStatus} change={setchange} />
            </div>
        </div>
    );
}

export default App;