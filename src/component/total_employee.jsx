import React from "react";

function TotalEmployee() {

    let [FrontEnd, BackEnd, Testing, Deployment] = [0, 0, 0, 0];
    Object.keys(localStorage).forEach(function (key) {
        let temp = JSON.parse(localStorage.getItem(key));
        switch (temp.department) {
            case "Frontend":
                FrontEnd += 1;
                break;
            case "Backend":
                BackEnd += 1;
                break;
            case "Testing":
                Testing += 1;
                break;
            case "Deployment":
                Deployment += 1;
                break;
            default:
                break;
        }
    });
    return (
        <div>
            <div id="totalemployee">
                <h1>Total Employee</h1>
                <table>
                    <thead>
                        <tr>
                            <th><h3>Department</h3></th>
                            <th>Employee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h3>FrontEnd</h3></td>
                            <td><h3>{FrontEnd}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>BackEnd</h3></td>
                            <td><h3>{BackEnd}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Testing</h3></td>
                            <td><h3>{Testing}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Deployment</h3></td>
                            <td><h3>{Deployment}</h3></td>
                        </tr>
                        <hr style={{ width: "155%", margin: "0px", borderStyle: "inset" }}></hr>
                        <tr>
                            <td><h3>Total</h3></td>
                            <td><h3>{localStorage.length}</h3></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
}
export default TotalEmployee;