import React from 'react'
import { navbarList } from '../constants/navbarList'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { modalSideBar } from '../features/uiSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col">
      {navbarList.map((item, index) => (
        <NavLink onClick={() => dispatch(modalSideBar())} to={item.url} key={item.id}>
          <button
            className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            {item.title}
          </button>

          {/* Chiziqcha faqat oxirgidan tashqari joylashadi */}
          {index !== navbarList.length && (
            <hr className="border-t border-gray-200" />
          )}
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar
