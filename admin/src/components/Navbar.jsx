// import React from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center justify-between py-2 px-[4%]">
        <p className="w-[max(10%, 80px)]">Mirico Ri Coli, Admin</p>
        <button onClick={() => setToken('')} className="bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full ">Logout</button>
    </div>
  )
}

export default Navbar