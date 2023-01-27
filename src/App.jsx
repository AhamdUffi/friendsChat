import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes path="/">
        <Route
          index
          element={
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
