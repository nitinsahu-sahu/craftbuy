import React from 'react'
import SideBar from "@/componets/backoffice/SideBar"
import NavBar from "@/componets/backoffice/NavBar"
const layout = ({children}) => {
  return (
    <div className='flex'>
      {/* sidebar */}
      <SideBar />
      <div className='w-full'>
        <NavBar />
        <main>
        {children}
        </main>
      </div>
    </div>
  )
}

export default layout
