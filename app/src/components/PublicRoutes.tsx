import { Navigate, Outlet } from "react-router-dom";
import { useAppData } from "../context/AppContext"

const PublicRoutes = () => {

    const { loading, isAuth } = useAppData()

    if (loading) return null;
    return isAuth ? <Navigate to={"/"} replace /> : <Outlet />


}

export default PublicRoutes