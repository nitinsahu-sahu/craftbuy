import { AlignJustify, Bell, Sun, User } from 'lucide-react'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between bg-slate-800 text-slate-50'>
      {/* Icon */}
      <button><AlignJustify /></button>
      {/* 3 Icon */}
      <div className='flex space-x-3'>
        <button ><Sun /></button>
        <button><Bell /></button>
        <button><User /></button>
      </div>
    </div>
  )
}

export default NavBar
