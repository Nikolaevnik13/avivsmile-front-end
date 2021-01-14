import React from "react"
import style from "./components.module.css"

const Header=()=>{



    return(
        <div className="container-fluid  m-0 p-0">
            <div className={`row  justify-content-center align-content-center ${style.header}`}>

                {/*<div>*/}
                    <h1 className="col-10" >Aviv Smile Welcome</h1>
                {/*</div>*/}


                {/*<img className="col" src={ require("../images/logoaviv2.png")} alt={"logo"}  />*/}
                {/*<img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"}/>*/}
            </div>
         </div>
    )

};
export default Header

