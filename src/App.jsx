import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import AuthRoutes from "./routes/AuthRoutes";
import GuestRoutes from "./routes/GuestRoutes";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<AuthRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route element={<GuestRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/reset" element={<Reset />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
