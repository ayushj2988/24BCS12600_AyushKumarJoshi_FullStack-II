import {Link,Routes,Route} from "react-router-dom";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";


function Dashboard(){
    return(
        <>
        <h1>Dashboard</h1>
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
        </>
    )
}

export default Dashboard;