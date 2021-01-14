import React, {useEffect} from "react";
import {getHoursInRange, pageTableSwitch, saveWorkHours} from "../../../../redux/actions/appAction";
import {connect} from "react-redux";
const WorkHours = (props) => {

    let seconds=props.workHours
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
            props.getHoursInRange(props.params)
        }
    })

    useEffect(() => {
        seconds=props.workHours;
    },[props.workHours])

    useEffect(() => {
        return () => {
            props.saveWorkHours(0);
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
        workHours: state.app.workHours,
        params: state.app.dataForRequest
    }
}
const mapDispatchToProps = {
    getHoursInRange,
    saveWorkHours,
    pageTableSwitch
}
export default connect(mapStateToProps, mapDispatchToProps)(WorkHours);