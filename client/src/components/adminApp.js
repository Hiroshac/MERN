
import React from "react";
import { Route,Routes } from "react-router-dom";
import AdashBoard from "./admin/aDashBoard";
import SupCreateMarkingSchemes from "./admin/SupCreateMarking"
import Viewusers from "./admin/Viewusers";
import Updateusers from "./admin/Updateusers";
import Addfiles from "./admin/Addfiles";
import Viewgroups from "./admin/Viewgroups";
import Schedule from "./admin/ScheduleEvaluations";
import GroupSchedule from "./admin/schedules";
import DisfilesAdmin from "./admin/DisfilesAdmin";
import Submittype from "./admin/Submittype";



const AdminApp =()=>{



    return(
        <>
        <div>
            <Routes>
           <Route exact path={'/aDash'} element={<AdashBoard/>}/>
           <Route exact path={'/smarking'} element={<SupCreateMarkingSchemes/>}/>
           <Route exact path="/userlist" element={<Viewusers/>}/>
            <Route exact path="/edituser" element={<Updateusers/>}/>
            <Route exact path="/addfiles" element={<Addfiles/>}/>
            <Route exact path="/disfilesadmin" element={<DisfilesAdmin/>}/>
            <Route exact path="/submittypes" element={<Submittype/>}/>
            <Route exact path="/grplist" element={<Viewgroups/>}/>
            <Route exact path="/schedule" element={<Schedule/>}/>
            <Route exact path='/groupSchedule/:_id' element={<GroupSchedule/>}/>

            </Routes>          
           {/* <Fpage/> */}
        </div>
        </>
    )

}
export default AdminApp
