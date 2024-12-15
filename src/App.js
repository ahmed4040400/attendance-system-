import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/admin/adminDashboard";
import DoctorDashboard from "./pages/doctor/doctorDashboard";
import AddAndRemoveDoctors from "./pages/admin/addAndRemoveDoctors";
import DoctorLogin from "./pages/doctor/doctorLogin";
import AdminLogin from "./pages/admin/adminLogin";
import DoctorRegister from "./pages/doctor/doctorRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DoctorLogin />} />
        <Route exact path="/doctor" element={<DoctorDashboard />} />
        <Route exact path="/register" element={<DoctorRegister />} />
        <Route exact path="/manageDoctors" element={<AddAndRemoveDoctors />} />
        <Route path="adminDashboard" element={<AdminDashboard />} />

        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
