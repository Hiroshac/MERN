import React from "react";
import { Route,Routes } from "react-router-dom";
import AdashBoard from "./admin/ADashBoard";
import PanelCreateMarkingSchemes from "./admin/PanelCreateMarkingS";
import SupCreateMarkingSchemes from "./admin/SupCreateMarking"
import Viewusers from "./admin/Viewusers";
import Updateusers from "./admin/Updateusers";
import Addfiles from "./admin/Addfiles";



const AdminApp =()=>{

    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/aDash'} element={<AdashBoard/>}/>
           <Route exact path={'/pcreateMarking'} element={<PanelCreateMarkingSchemes/>}/>
           <Route exact path={'/smarking'} element={<SupCreateMarkingSchemes/>}/>
            
        
        
            
           <Route exact path="/userlist" element={<Viewusers/>}/>
            <Route exact path="/edituser" element={<Updateusers/>}/>
            <Route exact path="/addfiles" element={<Addfiles/>}/>
            </Routes>          
           {/* <Fpage/> */}
        </div>
        </>
    )

}
export default AdminApp;