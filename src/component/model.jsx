import React, { useState } from "react";
import Form from "./form";
import "./css/form.css";
function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function (a) { return a.toUpperCase(); });
};

function Model({ closeModal }) {
    let confirm = "wait";
    let [check, setcheck] = useState(false);
    let [navigate, setnavigate] = useState(false);
    function submitform(e) {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        let approch = e.target;
        let newName = capitalize(approch.name.value);

        setnavigate(true);
        function User(name, age, department, status, phone_no, emailAddress) {
            this.name = name;
            this.age = age;
            this.department = department;
            this.status = status;
            this.phone_no = phone_no;
            this.emailAddress = emailAddress;
        }
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === newName) {
                confirm = "fail";
                setcheck(false);
                break;
            }
        }
        if (confirm !== "fail") {
            confirm = "succ";
            setcheck(true);
            let newuser = new User(newName, approch.age.value, approch.department.value, approch.status.value, approch.phone_no.value, approch.emailAddress.value);
            localStorage.setItem(newName, JSON.stringify(newuser));
        }
    }
    let blank = {
        name: "",
        age: "",
        department: "",
        status: "",
        phone_no: "",
        emailAddress: "",
    }

    return (
        <div className="ModalBackground">
            <div className="Modal">
                {navigate &&
                    <div>
                        {check && <div> <h1 id="confirm_h">"Employee Add Successfully"</h1></div>}
                        {!check && <div>
                            <h1 className="fail">"Employee Add Fail"</h1>
                            <p className="fali">username already exist</p>
                        </div>}
                        <button onClick={() => closeModal(false)} id="okbtn">Ok</button>
                        <button onClick={() => setnavigate(false)} id="okbtn">Add another</button>
                    </div>
                }

                {!navigate &&
                    <div>
                        <div className="body">
                            <Form SubmitForm={submitform} CloseModal={closeModal} props={blank} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );

}
export default Model;
