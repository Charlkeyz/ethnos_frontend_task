import { useContext } from "react";
import { DashboardContext } from "../Components/DashboardContext";
import { FiCheckCircle } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { Spinner } from "@nextui-org/react";


export default function Todos() {

  const {setFilterTodo, filteredTodos, filterTodo, isDark, loading} = useContext(DashboardContext)
  return (
    <div className={`container mx-auto p-4 ${isDark ? "bg-[#18181B] " : "bg-gray-100"} rounded-lg shadow-lg max-w-2xl`}>
      <h2 className={`text-2xl font-bold mb-4 text-center ${isDark ? "text-[#686871]" : "text-gray-800"}`}>Todos</h2>
      
      <div className="mb-4 flex items-center justify-center">
        {/* <Filter className="mr-2 text-gray-600" /> */}
        <select 
          className={`border rounded p-2 ${isDark ? "bg-[#18181B] text-white" : "bg-white text-gray-800"}`}
          value={filterTodo}
          onChange={(e) => setFilterTodo(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="notCompleted">Not Completed</option>
        </select>
      </div>

      <ul className="space-y-2">
        {loading ? (<span className="flex justify-center items-center"><Spinner/></span>) : (filteredTodos.map(todo => (
          <li 
            key={todo.id} 
            className={`p-3 rounded flex items-center ${
              todo.completed ? 'bg-green-100' : 'bg-yellow-100'
            } shadow-sm`}
          >
            {todo.completed ? 
              <FiCheckCircle className="mr-2 text-green-500" /> : 
              <FaRegCircle className="mr-2 text-yellow-500" />
            }
            <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.title}
            </span>
          </li>
        )))}
      </ul>

      {filteredTodos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No todos match the current filter.</p>
      )}
    </div>
  );
  
}
