import React, {useEffect, useState} from "react"
import style from "./components.module.css"
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import {connect} from "react-redux";
import {loginAction} from "../redux/actions/userAction";
import {removeUsersFromStore} from "../redux/actions/appAction";






const Card = (props) => {

    const [open, setOpen] = useState(false);
    const [state, setState] = useState({password:""});


    const handlerInput = (event) => {
        event.persist();
        setState(prevState => ({...prevState, ...{password: event.target.value}}))

    };
    const handlerSubmit = () => {

        props.employee.password=state.password
        props.loginAction(props.employee,props.flagLogin)
        setState({
            password:""
        });
    };


    return (

        <div className={`container card ${style.card_menu} container mt-3`}>
            <div className="card-body row align-items-center justify-content-center">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <Button  onClick={() => setOpen(!open) }
                             // aria-controls="example-collapse-text"
                             // aria-expanded={open}
                    >{props.employee.firstName +" "+ props.employee.lastName}
                    </Button>
                </div>

                <div className="col-12 d-flex align-items-center justify-content-center">
                    <Collapse  in={open}>
                        <label   >Password
                            <input type="password"
                                    // ref={cardRef}
                                   name="password"
                                   value={state.password}
                                   onChange={handlerInput}
                                   className="form-control"
                                   // aria-describedby="passwordHelpBlock"
                                />
                            <button type="submit"
                                    onClick={handlerSubmit}
                                    className="btn btn-outline-secondary mt-1">submit
                            </button>
                            <small className="form-text text-muted">
                                Your password must be 0-20 characters long, contain letters and numbers, and must not
                                contain spaces, special characters, or emoji.
                            </small>
                    </label>
                    </Collapse>
                </div>

            </div>
        </div>
    )
};
const mapStateToProps=state=>{
    return{
        flagLogin:state.app.flagLogin
    }
}

const mapDispatchToProps={
    loginAction
};
export default connect(mapStateToProps,mapDispatchToProps)(Card);


// class Card extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state={
//             open:false,
//             state:{password:""}
//         }
//
//     }
//     handlerInput = (event) => {
//         event.persist();
//         this.setState(prevState => ({...prevState, ...{password: event.target.value}}))
//     };
//     handlerSubmit = () => {
//         this.props.employee.password=this.state.state.password
//         this.props.loginAction(this.props.employee,this.props.flagLogin)
// };
//     render(){
//         return (
//             <div ref={this.cardRef} className={`container card ${style.card_menu} container mt-3`}>
//                 <div  className="card-body row align-items-center justify-content-center">
//                     <div  className="col-12 d-flex align-items-center justify-content-center">
//                         <Button  onClick={() => this.setState({...this.state,open:!this.state.open} )}
//                         >{this.props.employee.firstName +" "+ this.props.employee.lastName}
//                         </Button>
//                     </div>
//                     <div  className="col-12 d-flex align-items-center justify-content-center">
//                         <Collapse  in={this.state.open}>
//                             <label ref={this.cardRef} >Password
//                                 <input type="password"
//
//                                        name="password"
//                                        value={this.state.password}
//                                        onChange={this.handlerInput}
//                                        className="form-control"
//                                        aria-describedby="passwordHelpBlock"/>
//                                 <button type="submit"
//                                         onClick={this.handlerSubmit}
//                                         className="btn btn-outline-secondary mt-1">submit
//                                 </button>
//                                 <small className="form-text text-muted">
//                                     Your password must be 0-20 characters long, contain letters and numbers, and must not
//                                     contain spaces, special characters, or emoji.
//                                 </small>
//                             </label>
//                         </Collapse>
//                     </div>
//
//                 </div>
//             </div>
//         )
//     }
//
// };
// function mapStateToProps(state){
//     return{
//         flagLogin:state.app.flagLogin
//     }
// }
//
// function mapDispatchToProps(dispatch){
//     return{
//         loginAction
//     }
//
// };
// export default connect(mapStateToProps,mapDispatchToProps)(Card);
