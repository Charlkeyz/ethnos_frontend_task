import { useContext } from "react"
import { DashboardContext } from "../Components/DashboardContext"


export default function Settings() {
    const {isDark} = useContext(DashboardContext)
  return (
    <div className={`${isDark ? "text-white" : ""}`}>
        <h1 className="text-3xl font-bold">Settings</h1>
    </div>
  )
}
