import React from "react";
import Header from "../Header";
import AdminMenu from "./AdminMenu";
import AdminSwitcher from "./AdminSwitcher";
import AdminFooter from "./AdminFooter";


const AdminFrame = () => {
    return <div >
        <Header/>
        <AdminMenu/>
        <AdminSwitcher/>
        <AdminFooter/>
    </div>
}
export default AdminFrame;