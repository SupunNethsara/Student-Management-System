import Login from "./pages/Login"
import React from "react"
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom'
import Sign from "./pages/Sign"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Enrolled from "./pages/Enrolled"
import NotFound from "./pages/NotFound"



function App() {
  // const login = window.localStorage.getItem("isLogedin");
  const isLoggedin = window.localStorage.getItem("isLogedin");
  return (
    // <BrowserRouter>

    //   <Routes>

    //     <Route exact path='/login' element={<Login />}></Route>
    //     <Route path='/signup' element={<Sign />}></Route>

    //     <Route path='/' element={<Dashboard />}>
    //       <Route index element={<Home />} />
    //       <Route path="" element={<Home />} />
    //       <Route path="/enrolled" element={<Enrolled />} />
    //     </Route>


    //     <Route path="*" element={<NotFound />} />
    //   </Routes>


    // </BrowserRouter >

    <BrowserRouter>
    <Routes>
      {/* Public Routes */}
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Sign />} />

      {/* Protected Routes */}
      {isLoggedin ? (
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="enrolled" element={<Enrolled />} />
        </Route>
      ) : (
        <Route path='/' element={<Navigate to="/login" replace />} />
      )}

      {/* Fallback Route for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
    

  )
}

export default App
