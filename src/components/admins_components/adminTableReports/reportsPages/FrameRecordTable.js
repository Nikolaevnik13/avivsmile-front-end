import React, {useEffect, useState} from "react";
import {fetchAllRecordsByDay} from "../../../../redux/actions/tableAction";
import {connect} from "react-redux";
import {getRecordsInRange} from "../../../../redux/actions/appAction";
import TableRecordRow from "./TableRecordRow";

const FrameRecordTable = (props) => {
    const [recordsToRender,setRecordsToRender]=useState(props.records)
    const [date, setDate] = useState({});

    const handlerInputDate = (event) => {
        setDate(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
    }

    // const handlerSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(date)
    //     props.getRecordsInRange(date);
    // }

    useEffect(()=>{
        setRecordsToRender(props.records)
    },[props.records])

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <h1>gggggggg</h1>
                    {/*<form className="form-group"*/}
                    {/*      onSubmit={handlerSubmit}*/}
                    {/*>*/}
                    {/*    <h3>All records for</h3>*/}
                    {/*    <label>Date:</label>*/}
                    {/*    <input type="date"*/}
                    {/*           name="date"*/}
                    {/*           placeholder="dd/mm/yyyy"*/}
                    {/*        // value={date.date}*/}
                    {/*           required*/}
                    {/*           onChange={handlerInputDate}*/}
                    {/*           className="form-control"/>*/}
                    {/*    <button type="submit"*/}
                    {/*            className="btn btn-primary mt-2">Submit*/}
                    {/*    </button>*/}
                    {/*</form>*/}
                    <div className="col">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Nameeee</th>
                                <th scope="col">Start</th>
                                <th scope="col">End</th>
                                <th scope="col">hours</th>
                            </tr>
                            </thead>
                            <tbody>
                            {props.records.map(item=> <TableRecordRow user={item} key={item.id}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}
const mapDispatchToProps = {
    fetchAllRecordsByDay,
    getRecordsInRange
}
const mapStateToProps = state => {
    return {
        // records: state.tableData.records
        records:state.app.arrayRecords
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( FrameRecordTable);