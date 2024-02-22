import CenterContainer from "../components/CenterContainer";

import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Home() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  async function handleLogout() {
    signOut(auth)
      .then(() => {
        navigate("/login");

        console.log("Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (loading)
    return (
      <CenterContainer>
        <p className="text-center animate-pulse text-gray-400">Loading...</p>
      </CenterContainer>
    );

  if (error)
    return <p className="text-center animate-pulse">{error.message}</p>;

  return (
    <>
      <CenterContainer>
        {user ? (
          <>
            <div className="text-center">Welcome, {user.email}</div>
            <div className="mt-4 py-4 flex justify-center items-center">
              <button
                type="button"
                onClick={handleLogout}
                className="px-4 py-1.5 bg-red-500 text-white rounded"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-center text-red-400">You are not Logged in.</p>
            <p className="mt-4 text-center">
              Already Have an Account?{" "}
              <NavLink to="/login" className="text-blue-500 underline">
                Login
              </NavLink>
            </p>
            <p className="mt-4 text-center">
              No Account?{" "}
              <NavLink to="/register" className="text-blue-500 underline">
                Register
              </NavLink>
            </p>
          </>
        )}
      </CenterContainer>
    </>
  );
}

export default Home;
