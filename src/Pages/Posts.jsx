import { useContext } from "react"
import { DashboardContext } from "../Components/DashboardContext"
import { Card, CardBody, CardFooter, CardHeader, Pagination, Spinner } from "@nextui-org/react";


export default function Posts() {


  const {currentPost, getUserName, totalPosts, handlePageChange, currentPage, isDark, loading} = useContext(DashboardContext)
  return (
    <>
    <div className={`flex h-full w-full flex-wrap gap-5`}>
      { loading ? (<span className="text-center flex w-screen justify-center"> <Spinner /></span>) : (currentPost.map((item, index) => (
        <Card shadow="sm" key={index} className={`${isDark ? "bg-[#18181B] text-[#686871]" : ""} lg:w-1/3 flex flex-wrap p-2`}>
          <CardHeader className="text-base font-bold">
            <h1 className=""><b className={`${isDark ? "text-white" : ""}`}>Title:</b> {item.title}</h1>
          </CardHeader>
          <CardBody className="text-xs lg:text-sm lg:font-bold lg:mb-1">
            <p >{item.body}</p>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <p className="text-sm text-gray-500">
              <strong>Posted by:</strong> {getUserName(item.id)}
            </p>
          </CardFooter>
        </Card>
      )))}
      
          <Pagination
              total={totalPosts}
              showControls
              color="default"
              showShadow
              initialPage={currentPage}
              onChange={handlePageChange}
              className=" h-20 p-5"
              classNames ={{
                cursor: isDark ? "bg-[#39393F] border-none text-white" : ""
              }}

              />
              
      
    </div>
    
    </>
  );
}
  

