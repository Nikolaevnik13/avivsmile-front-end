import React, {useState} from "react";
import {Button, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";
import {deleteRecordAction, editRecordAction} from "../../../redux/actions/tableAction";
import {connect} from "react-redux";
import {getRowsWithNull, saveDateForRequestTable} from "../../../redux/actions/appAction";


const TablesRowForReports = (props) => {

    let placeHolderStart = "09:00";
    let placeHolderFinish = "20:00";

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [state, setState] = useState({
        start: props.user.start,
        finish: props.user.finish,
    });

    if (props.user.start) {
        const index = state.start.indexOf("T")
        state.start = state.start.substring(index + 1, 16);
    }

    if (props.user.finish) {
        const index = state.finish.indexOf("T")
        state.finish = state.finish.substring(index + 1, 16);
    }

    let total = "none"
    if (state.start && state.finish) {
        let seconds = (new Date(props.user.finish).getTime() - new Date(props.user.start).getTime()) / 1000;
        seconds = seconds % (24 * 3600);
        let hour = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds %= 3600) / 60);
        total = hour + " h :" + minutes + " min"
    }

    const handlerOnChange = e => {
        setState(prevState => ({...prevState, ...{[e.target.name]: e.target.value}}))
    }

    function validationDateBeforeFetch(date) {
        let pattern = new RegExp("^(2[0-3]|[01][0-9]):([0-5][0-9])$");
        if (pattern.test(date)) return true
        return false;
    }


    const handlerOnBlur = e => {
        if (validationDateBeforeFetch(e.target.value)) {
            console.log("here")
            let oldTime = props.user[e.target.name];
            let record;
            let newTime;
            if (oldTime != null) {
                const index = oldTime.indexOf("T")
                newTime = oldTime.substring(0, index + 1)
                newTime += e.target.value + ":00"
            } else {
                newTime = props.user.date + "T" + e.target.value + ":00";
            }
            record = props.user;
            record = {...record, [e.target.name]: newTime}

            //--
            // props.saveDateForRequestTable({date:record.date});
            props.editRecordAction(record,getRowsWithNull)

            // props.getRowsWithNull(props.params)


        } else {
            alert("enter correct time")
        }
    }
    // const handlerKeyUp = event => {
    //     if (event.keyCode === 13) {
    //         handlerOnBlur(event)
    //     }
    // }

    // const handleDeleteRecord = e => {
    //     props.deleteRecordAction(props.user.id,getRowsWithNull)
    // }
    return <tr>
        <td>{props.user.user.firstName + " " + props.user.user.lastName}</td>

        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">example (12:00)</Tooltip>}>

            <td><input type="text"
                       placeholder={placeHolderStart}
                       onBlur={handlerOnBlur}
                       onChange={handlerOnChange}
                       // onKeyUp={handlerKeyUp}
                       name="start"
                       value={state.start !== null ? state.start : "none"}/></td>
        </OverlayTrigger>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">example (12:00)</Tooltip>}>
            <td><input type="text"
                       placeholder={placeHolderFinish}
                       onBlur={handlerOnBlur}
                       onChange={handlerOnChange}
                       // onKeyUp={handlerKeyUp}
                       name="finish"
                       value={state.finish !== null ? state.finish : "none"}/></td>
        </OverlayTrigger>

        <td>{total}</td>
        <td>
            <button type="button"
                    className="btn btn-outline-primary"
                    onClick={handleShow}
            >delete
            </button>
        </td>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure want delete this record?</Modal.Title>
            </Modal.Header>
            <Modal.Body>You will not be able return it!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary"
                        // onClick={handleDeleteRecord}
                    >
                    Confirm delete
                </Button>
            </Modal.Footer>
        </Modal>
    </tr>

}
const mapDispatchToProps = {
    editRecordAction,
    deleteRecordAction,
    saveDateForRequestTable
}
export default connect(null, mapDispatchToProps)(TablesRowForReports);