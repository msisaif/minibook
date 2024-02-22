import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CenterContainer from "../components/CenterContainer";
import { sendPasswordReset } from "../firebase";

function Reset() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await sendPasswordReset(email);

    console.log(response);

    navigate("/");
  }

  return (
    <>
      <CenterContainer>
        <h1 className="text-center text-3xl font-bold mb-4 text-sky-600">
          Reset Password
        </h1>
        <form className="grid gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email Address"
            className="px-2 py-1 border rounded"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-2 py-1 border rounded bg-sky-600 text-white"
          >
            Send Password Reset Email
          </button>
        </form>
        <p className="mt-4 text-center">
          No Account?{" "}
          <NavLink to="/register" className="text-blue-500 underline">
            Register
          </NavLink>
        </p>
      </CenterContainer>
    </>
  );
}

export default Reset;
