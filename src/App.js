import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPage from "./Pages/ResetPage";

const App = () => {
  return (
    <Routes>
      <Route path="/reset/:token" element={<ResetPage />} />
    </Routes>
  );
};
export default App;
