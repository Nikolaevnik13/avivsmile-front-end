import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {
    getEmployeesWithoutAdminAction, getRecordsInRange,
    getRowsWithNull,
    pageNavigationSubAdminAction, pageTableSwitch, saveDateForRequestTable
} from "../../../redux/actions/appAction";

import ReportsSwitcher from "./ReportsSwitcher";
import FrameTablesReports from "./FrameTablesReports";
import {removeAllRecords} from "../../../redux/actions/tableAction";
import FrameRecordTable from "./reportsPages/FrameRecordTable";


const ReportsPerEmployee = (props) => {

    let flag=false;
    const [user, setUser] = useState({idUser: ""});
    const [fixedArrayEmployees, setFixedArrayEmployees] = useState([])
    const [showSubMenu, setShowSubMenu] = useState(false);


    useEffect(() => {
        props.getEmployeesWithoutAdminAction();
    }, [])

    useEffect(() => {
        const defaultObg = {idUser: "", firstName: "none", lastName: "selected"}
        setFixedArrayEmployees([defaultObg, ...props.employees]);
    }, [props.employees])

    const handlerInput = (event) => {
        event.persist();
        setUser(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
    };

    useEffect(() => {
        return () => {
            console.log("unm RePerEmpl 38 "+ props.records)
            props.removeAllRecords()
            // props.saveDateForRequestTable()
            props.pageTableSwitch("")
            console.log( props.records)
        }
    },[])

    const handlerSubmit = (e) => {
        e.preventDefault()
        // console.log(user)
        console.log(flag)
        if (flag){
            props.saveDateForRequestTable(user)
            props.getRecordsInRange(user)
            props.pageTableSwitch("recordsInRange")
        }else {
            props.saveDateForRequestTable(user)
            props.getRowsWithNull(user)
        }
    };

    console.log(props.records.length)
    if (props.records.length){
        console.log("perEmpl 62- length>0 render FrameTablesReports")
    } else console.log("length=0 render ReportsSwitcher")


    if (props.recordsInRange.length) {
        return (
            <div>
                <div className="container mt-5 border border p-4">
                    <form className="row" onSubmit={handlerSubmit}>
                        <div className="col-10  form-group">
                            <label>Choose, whom employee you want get for manipulation</label>
                            <select className="form-control"
                                    onChange={handlerInput}
                                    name="idUser"
                                    required>
                                {fixedArrayEmployees.map((employee, index) => <option value={employee.idUser}
                                                                                      key={index}>{employee.firstName + " " + employee.lastName}
                                </option>)}</select>
                        </div>
                        <div className="col-4">
                            <label>From:
                                <input type="date"
                                       name="startDate"
                                       placeholder="dd/mm/yyyy"
                                    // value={date.date}
                                       required
                                       onChange={handlerInput}
                                       className="form-control"/>
                            </label>
                        </div>
                        <div className="col-4">
                            <label>To:
                                <input type="date"
                                       name="finishDate"
                                       placeholder="dd/mm/yyyy"
                                    // value={date.date}
                                       required
                                       onChange={handlerInput}
                                       className="form-control"/>
                            </label>
                        </div>
                        {/*<div className="col-10 d-flex mt-3 justify-content-between">*/}
                        {/*    <button type="submit"*/}
                        {/*            className="btn btn-outline-secondary">Records*/}
                        {/*    </button>*/}
                        {/*    <button type="submit"*/}
                        {/*            className="btn btn-outline-secondary">Numbers work days*/}
                        {/*    </button>*/}
                        {/*    <button type="submit"*/}
                        {/*            className="btn btn-outline-secondary">Count hours work*/}
                        {/*    </button>*/}
                        {/*    <button type="submit"*/}
                        {/*            className="btn btn-outline-secondary">Overtime hours*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        <div className="col-10 d-flex mt-3 justify-content-between">
                            <button type="submit"
                                // onClick={()=>props.pageTableSwitch("recordsInRange")}
                                    onClick={()=>flag=true}
                                    className="btn btn-outline-secondary">Records
                            </button>
                            <button type="submit"
                                    onClick={()=>props.pageTableSwitch("numberWorkDays")}
                                    className="btn btn-outline-secondary">Numbers work days
                            </button>
                            <button type="submit"
                                    onClick={()=>props.pageTableSwitch("countHours")}
                                    className="btn btn-outline-secondary">Count hours work
                            </button>
                            <button type="submit"
                                    onClick={()=>props.pageTableSwitch("overtimeHours")}
                                    className="btn btn-outline-secondary">Overtime hours
                            </button>
                        </div>
                    </form>
                </div>
                <FrameTablesReports

                />
            </div>
        )
    } else {
        return (
            <div>
                <div className="container mt-5 border border p-4">
                    <form className="row" onSubmit={handlerSubmit}>
                        <div className="col-10  form-group">
                            <label>Choose, whom employee you want get for manipulation</label>
                            <select className="form-control"
                                    onChange={handlerInput}
                                    name="idUser"
                                    required>
                                {fixedArrayEmployees.map((employee, index) => <option value={employee.idUser}
                                                                                      key={index}>{employee.firstName + " " + employee.lastName}
                                </option>)}</select>
                        </div>
                        <div className="col-4">
                            <label>From:
                                <input type="date"
                                       name="startDate"
                                       placeholder="dd/mm/yyyy"
                                    // value={date.date}
                                       required
                                       onChange={handlerInput}
                                       className="form-control"/>
                            </label>
                        </div>
                        <div className="col-4">
                            <label>To:
                                <input type="date"
                                       name="finishDate"
                                       placeholder="dd/mm/yyyy"
                                    // value={date.date}
                                       required
                                       onChange={handlerInput}
                                       className="form-control"/>
                            </label>
                        </div>
                        <div className="col-10 d-flex mt-3 justify-content-between">
                            <button type="submit"
                                // onClick={()=>props.pageTableSwitch("recordsInRange")}
                                    onClick={()=>flag=true}
                                    className="btn btn-outline-secondary">Records
                            </button>
                            <button type="submit"
                                    onClick={()=>props.pageTableSwitch("numberWorkDays")}
                                    className="btn btn-outline-secondary">Numbers work days
                            </button>
                            <button type="submit"
                                    onClick={()=>props.pageTableSwitch("countHours")}
                                    className="btn btn-outline-secondary">Count hours work
                            </button>
                            <button type="submit"
                                    onClick={()=>props.pageTableSwitch("overtimeHours")}
                                    className="btn btn-outline-secondary">Overtime hours
                            </button>
                        </div>
                    </form>
                </div>


                <ReportsSwitcher/>

            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        userAuth: state.user.user,
        employees: state.app.employees,
        records: state.tableData.records,
        params: state.app.dataForRequest,
        recordsInRange:state.app.arrayRecords
    }
}

const mapDispatchToProps = {
    pageNavigationSubAdminAction,
    getEmployeesWithoutAdminAction,
    getRowsWithNull,
    saveDateForRequestTable,
    removeAllRecords,
    pageTableSwitch,
    getRecordsInRange
}

export default connect(mapStateToProps, mapDispatchToProps)(ReportsPerEmployee);








// import React, {useEffect, useState} from "react";
// import {connect} from "react-redux";
// import {
//     getEmployeesWithoutAdminAction, getRecordsInRange,
//     getRowsWithNull,
//     pageNavigationSubAdminAction, pageTableSwitch, saveDateForRequestTable
// } from "../../../redux/actions/appAction";
//
// import ReportsSwitcher from "./ReportsSwitcher";
// import FrameTablesReports from "./FrameTablesReports";
// import {removeAllRecords} from "../../../redux/actions/tableAction";
// import FrameRecordTable from "./reportsPages/FrameRecordTable";
//
//
// const ReportsPerEmployee = (props) => {
//
//     let flag=false;
//     const [user, setUser] = useState({idUser: ""});
//     const [fixedArrayEmployees, setFixedArrayEmployees] = useState([])
//     const [showSubMenu, setShowSubMenu] = useState(false);
//
//
//     useEffect(() => {
//         props.getEmployeesWithoutAdminAction();
//     }, [])
//
//     useEffect(() => {
//         const defaultObg = {idUser: "", firstName: "none", lastName: "selected"}
//         setFixedArrayEmployees([defaultObg, ...props.employees]);
//     }, [props.employees])
//
//     const handlerInput = (event) => {
//         event.persist();
//         setUser(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
//     };
//
//     useEffect(() => {
//         return () => {
//             console.log("unm RePerEmpl 38 "+ props.records)
//             props.removeAllRecords()
//             // props.saveDateForRequestTable()
//             props.pageTableSwitch("")
//             console.log( props.records)
//         }
//     },[])
//
//     const handlerSubmit = (e) => {
//         e.preventDefault()
//         // console.log(user)
//         console.log(flag)
//         if (flag){
//             props.saveDateForRequestTable(user)
//             props.getRecordsInRange(user)
//             props.pageTableSwitch("recordsInRange")
//         }else {
//             props.saveDateForRequestTable(user)
//             props.getRowsWithNull(user)
//         }
//     };
//
//     console.log(props.records.length)
//     if (props.records.length){
//         console.log("perEmpl 62- length>0 render FrameTablesReports")
//     } else console.log("length=0 render ReportsSwitcher")
//
//
//     if (props.recordsInRange.length) {
//         return (
//             <div>
//                 <div className="container mt-5 border border p-4">
//                     <form className="row" onSubmit={handlerSubmit}>
//                         <div className="col-10  form-group">
//                             <label>Choose, whom employee you want get for manipulation</label>
//                             <select className="form-control"
//                                     onChange={handlerInput}
//                                     name="idUser"
//                                     required>
//                                 {fixedArrayEmployees.map((employee, index) => <option value={employee.idUser}
//                                                                                       key={index}>{employee.firstName + " " + employee.lastName}
//                                 </option>)}</select>
//                         </div>
//                         <div className="col-4">
//                             <label>From:
//                                 <input type="date"
//                                        name="startDate"
//                                        placeholder="dd/mm/yyyy"
//                                     // value={date.date}
//                                        required
//                                        onChange={handlerInput}
//                                        className="form-control"/>
//                             </label>
//                         </div>
//                         <div className="col-4">
//                             <label>To:
//                                 <input type="date"
//                                        name="finishDate"
//                                        placeholder="dd/mm/yyyy"
//                                     // value={date.date}
//                                        required
//                                        onChange={handlerInput}
//                                        className="form-control"/>
//                             </label>
//                         </div>
//                         {/*<div className="col-10 d-flex mt-3 justify-content-between">*/}
//                         {/*    <button type="submit"*/}
//                         {/*            className="btn btn-outline-secondary">Records*/}
//                         {/*    </button>*/}
//                         {/*    <button type="submit"*/}
//                         {/*            className="btn btn-outline-secondary">Numbers work days*/}
//                         {/*    </button>*/}
//                         {/*    <button type="submit"*/}
//                         {/*            className="btn btn-outline-secondary">Count hours work*/}
//                         {/*    </button>*/}
//                         {/*    <button type="submit"*/}
//                         {/*            className="btn btn-outline-secondary">Overtime hours*/}
//                         {/*    </button>*/}
//                         {/*</div>*/}
//                         <div className="col-10 d-flex mt-3 justify-content-between">
//                             <button type="submit"
//                                 // onClick={()=>props.pageTableSwitch("recordsInRange")}
//                                     onClick={()=>flag=true}
//                                     className="btn btn-outline-secondary">Records
//                             </button>
//                             <button type="submit"
//                                     onClick={()=>props.pageTableSwitch("numberWorkDays")}
//                                     className="btn btn-outline-secondary">Numbers work days
//                             </button>
//                             <button type="submit"
//                                     onClick={()=>props.pageTableSwitch("countHours")}
//                                     className="btn btn-outline-secondary">Count hours work
//                             </button>
//                             <button type="submit"
//                                     onClick={()=>props.pageTableSwitch("overtimeHours")}
//                                     className="btn btn-outline-secondary">Overtime hours
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//                 <FrameTablesReports
//
//                 />
//             </div>
//         )
//     } else {
//         return (
//             <div>
//                 <div className="container mt-5 border border p-4">
//                     <form className="row" onSubmit={handlerSubmit}>
//                         <div className="col-10  form-group">
//                             <label>Choose, whom employee you want get for manipulation</label>
//                             <select className="form-control"
//                                     onChange={handlerInput}
//                                     name="idUser"
//                                     required>
//                                 {fixedArrayEmployees.map((employee, index) => <option value={employee.idUser}
//                                                                                       key={index}>{employee.firstName + " " + employee.lastName}
//                                 </option>)}</select>
//                         </div>
//                         <div className="col-4">
//                             <label>From:
//                                 <input type="date"
//                                        name="startDate"
//                                        placeholder="dd/mm/yyyy"
//                                     // value={date.date}
//                                        required
//                                        onChange={handlerInput}
//                                        className="form-control"/>
//                             </label>
//                         </div>
//                         <div className="col-4">
//                             <label>To:
//                                 <input type="date"
//                                        name="finishDate"
//                                        placeholder="dd/mm/yyyy"
//                                     // value={date.date}
//                                        required
//                                        onChange={handlerInput}
//                                        className="form-control"/>
//                             </label>
//                         </div>
//                         <div className="col-10 d-flex mt-3 justify-content-between">
//                             <button type="submit"
//                                     // onClick={()=>props.pageTableSwitch("recordsInRange")}
//                                 onClick={()=>flag=true}
//                                     className="btn btn-outline-secondary">Records
//                             </button>
//                             <button type="submit"
//                                     onClick={()=>props.pageTableSwitch("numberWorkDays")}
//                                     className="btn btn-outline-secondary">Numbers work days
//                             </button>
//                             <button type="submit"
//                                     onClick={()=>props.pageTableSwitch("countHours")}
//                                     className="btn btn-outline-secondary">Count hours work
//                             </button>
//                             <button type="submit"
//                                     onClick={()=>props.pageTableSwitch("overtimeHours")}
//                                     className="btn btn-outline-secondary">Overtime hours
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//
//
//                 <ReportsSwitcher/>
//
//             </div>
//
//         )
//     }
//
// }
//
// const mapStateToProps = state => {
//     return {
//         userAuth: state.user.user,
//         employees: state.app.employees,
//         records: state.tableData.records,
//         params: state.app.dataForRequest,
//         recordsInRange:state.app.arrayRecords
//     }
// }
//
// const mapDispatchToProps = {
//     pageNavigationSubAdminAction,
//     getEmployeesWithoutAdminAction,
//     getRowsWithNull,
//     saveDateForRequestTable,
//     removeAllRecords,
//     pageTableSwitch,
//     getRecordsInRange
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ReportsPerEmployee);
//
//
