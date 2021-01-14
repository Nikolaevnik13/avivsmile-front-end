import React, {useEffect} from "react";

import {getNumWorkDay, pageTableSwitch, saveNumWorkday} from "../../../../redux/actions/appAction";
import {connect} from "react-redux";


const WorkDays = (props) => {

    useEffect(() => {
        if (props.params.startDate) {
            props.getNumWorkDay(props.params)
        }
    })

    useEffect(() => {
        return () => {
            props.saveNumWorkday(0);
        }
    }, [])


    return (
        <div className="container">
            <div className="row">
                <h1>his worked days in range which you piked is : {props.workDays}</h1>
            </div>

        </div>
    )

}
const mapStateToProps = state => {
    return {
        workDays: state.app.workDays,
        params: state.app.dataForRequest
    }
}
const mapDispatchToProps = {
    getNumWorkDay,
    saveNumWorkday,
    pageTableSwitch
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkDays);