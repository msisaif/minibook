import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import {Outlet, Navigate} from "react-router-dom";
import CenterContainer from "../components/CenterContainer";

const GuestRoutes = () => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
            <CenterContainer>
              <p className="text-center animate-pulse text-gray-400">Loading...</p>
            </CenterContainer>
          );
    }

    if (error) {
        return <p className="text-center animate-pulse">{error.message}</p>;
    }

    return(
        <>
            {user ? <Navigate to="/" /> : <Outlet />}
        </>
    )
}

export default GuestRoutes;