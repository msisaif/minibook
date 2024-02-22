import CenterContainer from "../components/CenterContainer";

import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
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

  return (
    <>
      <CenterContainer>
        <div className="flex flex-col gap-2 justify-center items-center text-center">
          {user.photoURL && (<img src={user.photoURL} alt={user.email} className="size-8 border rounded-full object-cover" />)}
          {user.displayName && <span>{user.displayName}</span>}
          {user.email && <span>{user.email}</span>}
        </div>
        <div className="mt-4 py-4 flex justify-center items-center">
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-1.5 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </CenterContainer>
    </>
  );
}

export default Home;
