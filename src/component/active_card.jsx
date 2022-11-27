import React from "react";
import greendoticon from './images/greendoticon.png';
import rediconangle from './images/rediconangle.png';
function ActiveCard() {
    let [FrontEnd, BackEnd, Testing, Deployment] = [0, 0, 0, 0];
    let [Factive, Bactive, Tactive, Dactive] = [0, 0, 0, 0];
    Object.keys(localStorage).forEach(function (key) {
        let temp = JSON.parse(localStorage.getItem(key));

        switch (temp.department) {
            case "Frontend":
                FrontEnd += 1;
                if (temp.status === "Active") {
                    Factive += 1;
                }
                break;
            case "Backend":
                BackEnd += 1;
                if (temp.status === "Active") {
                    Bactive += 1;
                }
                break;
            case "Testing":
                Testing += 1;
                if (temp.status === "Active") {
                    Tactive += 1;
                }
                break;
            case "Deployment":
                Deployment += 1;
                if (temp.status === "Active") {
                    Dactive += 1;
                }
                break;
            default:
                break;
        }
    });
    return (
        <div style={{ marginTop: "12px" }}>
            <div id="activeemployee">
                <h1>Active Employee</h1>
                <table>
                    <thead>
                        <tr>
                            <th><h3>Department</h3></th>
                            <th>Active<img src={greendoticon} alt={"OnlineLogo"}></img></th>
                            <th>Not Active<img src={rediconangle} alt={"OfflineLogo"}></img></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><h3>FrontEnd</h3></td>
                            <td><h3>{Factive}</h3></td>
                            <td><h3>{FrontEnd - Factive}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>BackEnd</h3></td>
                            <td><h3>{Bactive}</h3></td>
                            <td><h3>{BackEnd - Bactive}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Testing</h3></td>
                            <td><h3>{Tactive}</h3></td>
                            <td><h3>{Testing - Tactive}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Deployment</h3></td>
                            <td><h3>{Dactive}</h3></td>
                            <td><h3>{Deployment - Dactive}</h3></td>
                        </tr>
                    </tbody>

                </table>

            </div>
        </div>

    );
}
export default ActiveCard;