import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchAllRecordsByDay} from "../../../redux/actions/tableAction";
import TableRow from "./TableRow";

const FrameTable = (props) => {
    const [recordsToRender,setRecordsToRender]=useState(props.records)
    const [date, setDate] = useState({});

    const handlerInputDate = (event) => {
        setDate(prevState => ({...prevState, ...{[event.target.name]: event.target.value}}))
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        props.fetchAllRecordsByDay(date);
    }

    useEffect(()=>{
        setRecordsToRender(props.records)
        },[props.records])

    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <form className="form-group"
                          onSubmit={handlerSubmit}
                    >
                        <h3>All records for</h3>
                        <label>Date:</label>
                        <input type="date"
                               name="date"
                               placeholder="dd/mm/yyyy"
                            // value={date.date}
                               required
                               onChange={handlerInputDate}
                               className="form-control"/>
                        <button type="submit"
                                className="btn btn-primary mt-2">Submit
                        </button>
                    </form>
                    <div className="col">
                        <table className="table">
                            <thead>
                            <tr>
                                <th scope="col">Name1</th>
                                <th scope="col">Start</th>
                                <th scope="col">End</th>
                                <th scope="col">hours</th>
                            </tr>
                            </thead>
                            <tbody>
                            {recordsToRender.map(item=> <TableRow user={item} key={item.id}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )

}
const mapDispatchToProps = {
    fetchAllRecordsByDay
}
const mapStateToProps = state => {
    return {
        records: state.tableData.records
    }
}
export default connect(mapStateToProps,mapDispatchToProps)( FrameTable);