import React, {useEffect, useState} from "react";
import {getEmployeesWithoutAdminAction, pageNavigationSubAdminAction} from "../../../redux/actions/appAction";
import {deleteRoleAction} from "../../../redux/actions/manageEmployeeAction";
import {connect} from "react-redux";

const FormDeleteRoleEmployee = (props) => {
    console.log("herererrerre")
    const [fixedArrayEmployees, setFixedArrayEmployees] = useState([])
    const [state, setState] = useState({
        idUser: "",
        firstName: "",
        lastName: "",
        password: ""
    });

    const handlerInput = (event) => {
        event.persist();
        setState(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
    };
    useEffect(() => {
        props.getEmployeesWithoutAdminAction();
    }, [])

    useEffect(() => {
        const defaultObg={idUser: "", firstName: "none", lastName: "selected"}
        setFixedArrayEmployees([defaultObg, ...props.employees]);
    }, [props.employees])

    useEffect(()=>{
        return () => {
            console.log("unmount")
        }
    })
    const handlerSubmit = (event) => {
        event.preventDefault()
        console.log(state)
        props.deleteRoleAction(state,props.userAuth)
    };


    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-10">
                    <form onSubmit={handlerSubmit}>
                        <div className="form-group">
                            <label>Choose, whom employee you want remove role admin</label>
                            <select className="form-control"
                                    onChange={handlerInput}
                                    name="idUser"
                                    required>
                                {fixedArrayEmployees.map((employee, index) => <option value={employee.idUser} key={index}>{employee.firstName + " " + employee.lastName}
                                </option>)}</select>
                        </div>
                        <button type="submit"
                                className="btn btn-primary">Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        userAuth: state.user.user,
        employees: state.app.employees
    }
}
const mapDispatchToProps = {
    pageNavigationSubAdminAction,
    getEmployeesWithoutAdminAction,
    deleteRoleAction
}

export default connect(mapStateToProps,mapDispatchToProps) (FormDeleteRoleEmployee);