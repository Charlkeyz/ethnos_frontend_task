/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios"
import { createContext, useEffect, useState } from "react"


export const DashboardContext = createContext()

export default function DashboardProvider({children}) {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [todos, setTodos] = useState([])
    const [albums, setAlbums] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [searchUser, setSearchUser] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [filterTodo, setFilterTodo] = useState("all")
    const [filteredTodos, setFilteredTodos] = useState([])


    const [isDark, setIsDark] = useState(false)
    const [loading, setLoading] = useState(true)




    const fetchData = async () => {
      setLoading(true)
      try {

        //Fetching users
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
        const usersData = usersResponse.data

        // Extracting users names and sorting them alphabetically
        const usersInfo = usersData.map(users => users).sort()

        //Fetching posts
        const postResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const postData = postResponse.data
        setPosts(postData)

        // Fetch todos
        const todosResponse = await axios.get('https://jsonplaceholder.typicode.com/todos')
        const todosData = todosResponse.data
        setTodos(todosData)

         // Fetch albums
        const albumsResponse = await  axios.get('https://jsonplaceholder.typicode.com/albums')
        const albumsData = albumsResponse.data
        setAlbums(albumsData)

        //Extracting users info
        const formattedUsers = usersInfo.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          address: user.address.city,
          company: user.company.name
        }))
        setUsers(formattedUsers)
        setFilteredUsers(formattedUsers)
        setLoading(false)

      } catch (error) {
        console.log("error msg", error)
      }
    }

    // Filter todos based on the selected filter option
    useEffect(() => {
      if(filterTodo === "completed") {
        setFilteredTodos(todos.filter(todo => todo.completed))
      } else if(filterTodo === "notCompleted"){
        setFilteredTodos(todos.filter(todo => !todo.completed))
      } else {
        setFilteredTodos(todos)
      }
    },[filterTodo, todos])

    const handleFilteredUsers = () => {
      const filterUser = users.filter((user)=> {
        const searchLowerCase = searchUser.toLowerCase()
        const matchesSearch = user.name.toLowerCase().includes(searchLowerCase)

        return matchesSearch
      })

      setFilteredUsers(filterUser)
      setCurrentPage(1)
    }
    // Find user name by matching userId from posts/albums
    const getUserName = (userId) => {
      const userName = users.find(user => user.id === userId)
      return userName ? userName.name : "Unknown" 
    }

    


    useEffect(()=> {
      handleFilteredUsers()
  },[users, searchUser])

    useEffect(()=> {
        fetchData()
    },[])

    const toggleDarkMode = () => {
      setIsDark(!isDark)
    }
    const handleSearchUser = (e) => {
      setSearchUser(e.target.value)
    }
     //pagination
     const userPerPage = 5
     const indexOfLastUser = currentPage * userPerPage
     const indexOfFirstUser = indexOfLastUser - userPerPage
     
     //pagination for users
     const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
     const totalPage = Math.ceil(filteredUsers.length / userPerPage)

     //pagination for posts
     const currentPost = posts.slice(indexOfFirstUser, indexOfLastUser)
     const totalPosts = Math.ceil(posts.length / userPerPage)

     //pagination for albums
     const currentAlbums = albums.slice(indexOfFirstUser, indexOfLastUser)
     

     const totalAlbums = Math.ceil(albums.length / userPerPage)


     //pagination
     const handlePageChange = (page) => {
         setCurrentPage(page)
     } 


    const value = {
      loading,
      currentAlbums,
      totalAlbums,
      currentPost,
      totalPosts,
      currentUsers,
      searchUser,
      totalPage,
      currentPage,
      users,
      posts,
      todos,
      albums,
      isDark,
      filteredTodos,
      filterTodo,
      setFilterTodo,
      getUserName,
      handlePageChange,
      toggleDarkMode,
      handleSearchUser
    }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}
