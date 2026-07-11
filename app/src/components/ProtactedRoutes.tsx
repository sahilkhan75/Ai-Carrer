import { Navigate, Outlet } from "react-router-dom";
import { useAppData } from "../context/AppContext"


const ProtactedRoutes = () => {
    const { loading, isAuth } = useAppData()

    if (loading) return null;

    if (!isAuth) { return <Navigate to={"/login"} replace /> }
    return <Outlet />
}

export default ProtactedRoutes