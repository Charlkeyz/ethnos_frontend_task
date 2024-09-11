import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./Users";
import Posts from "./Posts";
import Todos from "./Todos";
import Albums from "./Albums";
import DashboardLayout from "../Components/DashboardLayout";
import Settings from "./Settings";


export default function DashboardRoute() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout/>}>
                  <Route path="/" element={<Users />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/todos" element={<Todos />} />
                  <Route path="/albums" element={<Albums />} />
                  <Route path="/settings" element={<Settings />} />
                </Route>
            </Routes>
        </Router>
    </>
  )
}
