import React from "react";
import "./css/form.css";
function Form({ CloseModal, SubmitForm, props }) {
    return (
        <div className="model_background">
            <div className="ModalBackground">
                <div className="Modal">
                    <div className="CloseBtn">
                        <button onClick={() => CloseModal(false)}>X</button>
                    </div>
                    <div className="title">
                        <h1>Add Employee</h1>
                    </div>
                    <form className="ModalForm" onSubmit={SubmitForm}>
                        <label htmlFor="name">Name : </label>
                        <input type="text" id="name" name="name" defaultValue={props.name} required ></input>
                        <label htmlFor="age">Age : </label>
                        <input type="number" id="age" name="age" defaultValue={props.age} required></input>
                        <label htmlFor="department">Department : </label>
                        <select id="department" name="department" defaultValue={props.department}>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Testing">Testing</option>
                            <option value="Deployment">Deployment</option>
                        </select>
                        <p>Status:</p>
                        <input type="radio" id="Active" name="status" value="Active" defaultChecked></input>
                        <label htmlFor="Active">Active</label>
                        <input type="radio" id="Not Active" name="status" value="Not Active"></input>
                        <label htmlFor="Not Active">Not Active</label><br></br><br></br>

                        <label htmlFor="phone_no" >Phone No : </label>
                        <input type="number" id="phone_no" name="phone_no" defaultValue={props.phone_no} required></input>
                        <label htmlFor="emailAddress" >Email Address : </label>
                        <input type="email" id="emailAddress" name="emailAddress" defaultValue={props.emailAddress} required></input>
                        <div className="footer">
                            <button onClick={() => CloseModal(false)} id="cancelBtn">Cancel</button>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Form;