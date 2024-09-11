import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useContext } from "react";
import { DashboardContext } from "../Components/DashboardContext";


const headers = [
  {
    label: "Name",
  },
  {
    label: "Email",
  },
  {
    label: "Address",
  },
  {
    label: "Company",
  }
];


export default function Users() {
   


  const {currentUsers, currentPage, totalPage, handlePageChange, isDark} = useContext(DashboardContext)

  return (
    <>
      <div className="flex flex-col items-center gap-5">
          <Table aria-label="Users table"  removeWrapper classNames={{
            base: isDark ? "bg-[#18181B] text-white" : "bg-white p-4 rounded-xl overflow-auto" ,
            th: isDark ? "bg-[#27272A]" : ""
          }}>
              <TableHeader>
                {headers.map((header, index)=> (
                  <TableColumn key={index} className="px-4 py-2 text-base font-bold">{header.label}</TableColumn>
                ))}
              </TableHeader>
              <TableBody>
                {
                  currentUsers.map((user, index)=> (
                    <TableRow key={index.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.address}</TableCell>
                      <TableCell>{user.company}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
          </Table>
          <Pagination
              total={totalPage}
              showControls
              showShadow
              initialPage={currentPage}
              onChange={(page)=> handlePageChange(page)}
              classNames ={{
                cursor: isDark ? "bg-[#39393F] border-none text-white" : ""
              }}/>
      </div>
    </>
  )
}
