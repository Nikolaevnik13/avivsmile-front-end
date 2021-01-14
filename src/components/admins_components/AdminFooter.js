import React from "react";
import {connect} from "react-redux";
import {pageNavigationAction, pageNavigationSubAdminAction} from "../../redux/actions/appAction";
import {removeAllRecords} from "../../redux/actions/tableAction";

const AdminFooter =(props)=>{
    return (

            <div className="d-flex mb-4 fixed-bottom justify-content-around">

                <button type="button"
                        onClick={()=>{props.pageNavigationAction("")}}
                        className="btn btn-outline-danger">Main menu</button>
                <button type="button"
                        onClick={()=>{props.pageNavigationSubAdminAction("")}}
                        className="btn btn-outline-danger">Admin Menu</button>
            </div>
        )


};
const mapDispatchToProps={
    pageNavigationSubAdminAction,
    pageNavigationAction,
    removeAllRecords
}
export default connect(null,mapDispatchToProps)(AdminFooter);