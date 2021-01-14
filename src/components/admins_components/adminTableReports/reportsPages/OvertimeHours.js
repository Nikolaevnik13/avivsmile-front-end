import React, {useEffect} from "react";
import {
    getHoursInRange,
    getOverTimeInRange,
    pageTableSwitch,
    saveOvertimeHours,
    saveWorkHours
} from "../../../../redux/actions/appAction";
import {connect} from "react-redux";

const OvertimeHours = (props) => {

    let seconds=props.overtimeHours;
    let hour=0;
    let minutes=0;

    if(seconds){
        seconds*=60;
        seconds = seconds % (24 * 3600);
        hour = Math.floor(seconds / 3600);
        minutes = Math.floor((seconds %= 3600) / 60);
        console.log(hour)
    }

    useEffect(() => {
        if (props.params.startDate) {
            props.getOverTimeInRange(props.params)
        }
    })

    useEffect(() => {
        return () => {
            props.saveOvertimeHours(0);
        }
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h1>his worked hours in range which you piked is hours: {hour} minutes: {minutes}</h1>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        overtimeHours: state.app.overtimeHours,
        params: state.app.dataForRequest
    }
}
const mapDispatchToProps = {
    getHoursInRange,
    saveOvertimeHours,
    pageTableSwitch,
    getOverTimeInRange
}
export default connect(mapStateToProps, mapDispatchToProps)(OvertimeHours);