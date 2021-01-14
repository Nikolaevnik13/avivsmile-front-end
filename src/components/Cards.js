import React, {useEffect} from "react"
import Card from "./Card";
import {connect} from "react-redux";
import {removeUsersFromStore} from "../redux/actions/appAction";


const Cards = (props) => {

    useEffect(() => {
        return () => {
            props.removeUsersFromStore()
        }
    },[])

    if (!props.employees.length) {
        return <h2>There are not employees</h2>
    } else {
        return (
            props.employees.map(employee => <Card employee={employee} key={employee.idUser}/>)
        )
    }
}

const mapDispatchToProps = {
    removeUsersFromStore
}
const mapStateToProps = (state) => {
    return {
        employees: state.app.employees
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);

