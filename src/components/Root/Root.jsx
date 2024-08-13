import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
