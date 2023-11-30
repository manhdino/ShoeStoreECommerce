import { Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = ({ authData }) => {
    
    if(!authData.isLoggedIn) {
        return <Navigate to = "/login" replace />; 
    } 
    return <Outlet />;
}

export default ProtectedRoute;

