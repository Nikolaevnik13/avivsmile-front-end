import React from "react"
import Header from "./Header";
import style from "./components.module.css";
import Button from "./Button";
import {connect} from "react-redux";
import {writeRecordStartOrFinish} from "../redux/actions/userAction";

const Choice = (props) => {

    // const [state,setState]=useEffect();
    return (
        <div>
            <Header/>
            <div className={`container card ${style.card_menu} container`}>
                <div className="card-body row align-items-center justify-content-center">
                    <div className="col-6 d-flex justify-content-center">
                        <button
                            onClick={()=>props.writeRecordStartOrFinish(true,props.user)}
                            type="button"
                            className="btn btn-primary"
                        >start</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <button
                            onClick={()=>props.writeRecordStartOrFinish(false,props.user)}
                            type="button"
                            className="btn btn-primary"
                        >finish</button>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
                <Button color={"btn-outline-danger"} title={"MENU"}/>
            </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        user:state.user.user
    }
}
const mapDispatchToProps={
    writeRecordStartOrFinish
}
export default connect (mapStateToProps,mapDispatchToProps)(Choice);