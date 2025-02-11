import AlumniDirectory from "../component/Alumni/AlumniDirectory";
import JobBoard from "../component/Alumni/job/JobBoard";
import JobForm from "../component/Alumni/job/JobForm";
import Profile from "../component/Alumni/Profile";

function Alumni(){
    return(
        <>
        <Profile/>
        <AlumniDirectory/>
        <JobBoard/>
        <JobForm/>
        </>
    )
}
export default Alumni;