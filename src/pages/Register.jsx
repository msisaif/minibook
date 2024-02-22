import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CenterContainer from "../components/CenterContainer";
import { registerWithEmailAndPassword } from "../firebase";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const user = await registerWithEmailAndPassword(email, password);

      console.log(user);

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <CenterContainer>
        <h1 className="text-center text-3xl font-bold mb-4 text-sky-600">
          Register
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="px-2 py-1 border rounded"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-2 py-1 border rounded bg-sky-600 text-white"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already Have an Account?{" "}
          <NavLink to="/login" className="text-blue-500 underline">
            Login
          </NavLink>
        </p>
      </CenterContainer>
    </>
  );
}

export default Register;
