import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CenterContainer from "../components/CenterContainer";
import { loginWithEmailAndPassword, signInWithGitHub, signInWithGoogle } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await loginWithEmailAndPassword(email, password);

      console.log(response);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  function getSignInProvider(provider) {
    switch(provider) {
      case 'google':
        return signInWithGoogle;

      case 'github':
        return signInWithGitHub;

      default: null
    }
  }

  async function handleSocialLogin(provider) {
    const signInWithProvider = getSignInProvider(provider);

    if(signInWithProvider) {
      try {
        const response = await signInWithProvider();
  
        console.log(response);
  
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <CenterContainer>
        <h1 className="text-center text-3xl font-bold mb-4 text-sky-600">
          Login
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
            Login
          </button>
        </form>
        <hr className="mt-4" />
        <div className="flex justify-start items-center mt-4 gap-2">
          <p className="italic">Login with</p>
          <button
            type="button"
            onClick={() => handleSocialLogin('google')}
            className="px-2 py-1 border rounded bg-pink-500 text-white"
          >
            Google
          </button>
          <button
            type="button"
            onClick={() => handleSocialLogin('github')}
            className="px-2 py-1 border rounded bg-black text-white"
          >
            GitHub
          </button>
        </div>
        <hr className="mt-4" />
        <p className="mt-4 text-center">
          No Account?{" "}
          <NavLink to="/register" className="text-blue-500 underline">
            Register
          </NavLink>
        </p>
        <p className="mt-2 text-center">
          Forgot Password?{" "}
          <NavLink to="/reset" className="text-blue-500 underline">
            Reset Password
          </NavLink>
        </p>
      </CenterContainer>
    </>
  );
}

export default Login;
