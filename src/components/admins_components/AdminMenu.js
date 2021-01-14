import React from "react";
import {Dropdown} from "react-bootstrap";
import {connect} from "react-redux";
import { pageNavigationSubAdminAction} from "../../redux/actions/appAction";

const AdminMenu = (props) => {

    return (
        <div className="container mt-3">
            <div className="row justify-content-center">
                <div className="col-5">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Manage employee
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>props.pageNavigationSubAdminAction("FormAddEmployee")}>Add new employee</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.pageNavigationSubAdminAction("FormDeleteEmployee")}>Delete employee</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.pageNavigationSubAdminAction("FormAddRoleEmployee")}>Add role to employee</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.pageNavigationSubAdminAction("FormDeleteRoleEmployee")}>Remove role to employee</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.pageNavigationSubAdminAction("FormEditEmployee")}>Edit employee</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>


                <div className="col-5">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Reports
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>props.pageNavigationSubAdminAction("AllRecordsByDay")}>All records by day</Dropdown.Item>
                            <Dropdown.Item onClick={()=>props.pageNavigationSubAdminAction("ReportsPerEmployee")}>Reports per employee</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
        </div>
    )
}



const mapDispatchToProps={
    pageNavigationSubAdminAction
}
export default connect(null,mapDispatchToProps)(AdminMenu);