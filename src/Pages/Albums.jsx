import { useContext } from "react"
import { DashboardContext } from "../Components/DashboardContext"
import { Card, CardBody, CardHeader, Pagination, Spinner } from "@nextui-org/react"
import { FaMusic } from "react-icons/fa6";


export default function Albums() {

  const {currentAlbums, getUserName, totalAlbums, handlePageChange, currentPage, isDark, loading} = useContext(DashboardContext)
  
  return (
    <>
        <div className={`container mx-auto p-4 ${ isDark ? "bg-gray-300" : "bg-white"} rounded-lg shadow-lg max-w-3xl w-full h-full`}>
              <h2 className="text-2xl font-bold mb-4 flex items-center justify-center text-gray-800">
                <FaMusic className="mr-2" />
                Albums
              </h2>
            <div className=" flex flex-col gap-5">
              {loading ? (<span className="flex justify-center flex-col items-center h-screen"><Spinner/></span>) : (currentAlbums.map((item, index) => (
                <Card shadow="sm" key={index} className={`${isDark ? "bg-[#18181B] text-[#686871]" : "bg-gray-100"}p-4 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-200`}>
                  <CardHeader className="text-base font-bold">
                    <h1 className={`${isDark ? "text-white" : ""} text-sm font-normal`}><b >Title:</b> {item.title}</h1>
                  </CardHeader>
                  <CardBody className="text-xs lg:text-sm lg:font-bold">
                    <p className="text-sm text-gray-500">
                      <strong>Posted by:</strong> {getUserName(item.id)}
                    </p>
                  </CardBody>
                </Card>
              )))}
            </div>
      
          <Pagination
              total={totalAlbums}
              showControls
              color="default"
              showShadow
              boundaries={0}
              siblings={0}
              page={currentPage}
              onChange={handlePageChange}
              className=" h-20 p-5"
              classNames ={{
                cursor: isDark ? "bg-[#39393F] border-none text-white" : ""
              }}/>
              
      
    </div>
    
    </>
  )
}
