import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { DashboardContext } from "./DashboardContext";


export default function DashboardLayout() {

	const {isDark} = useContext(DashboardContext)
  return (
    <>
        	<div className={`${isDark ? "bg-black" : "bg-neutral-100"} h-full w-screen overflow-auto flex flex-row`}>
			    <Sidebar/>
			    <div className="">
				    <Header/>
				    <div className="flex-1 p-4 min-h-0 overflow-auto h-screen w-screen">
					    <Outlet/>
				    </div>
			    </div>
		    </div>
    </>
  )
}
