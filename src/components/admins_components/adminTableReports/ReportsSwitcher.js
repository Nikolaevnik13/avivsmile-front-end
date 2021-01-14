import React from "react"
import {connect} from "react-redux";
import WorkDays from "./reportsPages/WorkDays";
import WorkHours from "./reportsPages/WorkHours";
import OvertimeHours from "./reportsPages/OvertimeHours";
import FrameTable from "./FrameTable";
import FrameTablesReports from "./FrameTablesReports";
import FrameRecordTable from "./reportsPages/FrameRecordTable";

const ReportsSwitcher = (props) => {
    switch (props.pageTableSwitch) {

        case "numberWorkDays":
            return <WorkDays/>

        case "countHours":
            return <WorkHours/>

        case "overtimeHours":
            return <OvertimeHours/>

        case "recordsInRange":return <FrameRecordTable/>


        default:
            return <h1> default!!!</h1>
    }


}
const mapStateToProps = state => {
    return {
        pageTableSwitch: state.app.pageTableSwitch,

    }
}
export default connect(mapStateToProps, null)(ReportsSwitcher);