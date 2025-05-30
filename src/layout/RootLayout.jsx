import React, { useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { LogIn, LogOut, UserPlus } from 'lucide-react'
import { modalSideBar, showLoginModal, showSignUpModal } from '../features/uiSlice'

const RootLayout = () => {
  const dispatch = useDispatch()
  const modalSideBarr = useSelector(state => state.uiSlice.modalSideBarOpen)
  const sidebarRef = useRef()
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [openDropdown, setOpenDropdown] = useState(false)

  // LocalStorage orqali foydalanuvchini olish
  useEffect(() => {
    const user = localStorage.getItem('loggedInUser')
    if (user) {
      setLoggedInUser(JSON.parse(user))
    }
  }, [])

  // Tashqariga bosilganda modalni yopish
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        modalSideBarr
      ) {
        dispatch(modalSideBar())
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [modalSideBarr, dispatch])

  // Logout funksiyasi
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser')
    setLoggedInUser(null)
    dispatch({ type: 'uiSlice/modalSideBarOpen', payload: false })
  }

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden overflow-x-hidden select-none">
      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`${modalSideBarr ? 'translate-x-0' : 'translate-x-full'}
        w-80 fixed sm:hidden right-0 top-0 bg-white z-50 border border-gray-200
        flex flex-col gap-1 transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          {loggedInUser ? (
            <div className="px-3 pt-5">
              <p className="font-semibold text-gray-800 text-[15px]">
                {loggedInUser.fullName}
              </p>
              <p className="text-sm text-gray-500 truncate">{loggedInUser.email}</p>

              <hr className="my-3 border-gray-200" />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  dispatch(showLoginModal())
                  setOpenDropdown(false)
                }}
                className="flex items-center gap-2 px-4 py-2 text-[15px] text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                <LogIn size={18} className="text-gray-500" />
                Login
              </button>

              <button
                onClick={() => {
                  dispatch(showSignUpModal())
                  setOpenDropdown(false)
                }}
                className="flex items-center gap-2 px-4 py-2 text-[15px] text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all duration-200"
              >
                <UserPlus size={18} className="text-gray-500" />
                Sign Up
              </button>
            </div>
          )}
        </div>

        <div className="h-screen overflow-y-auto px-2">
          <Navbar />
          <div className='flex flex-col '>
            <NavLink onClick={() => dispatch(modalSideBar())} className={'w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200'} to={'/Dramma'} >Dramma</NavLink>
            <hr className="border-t border-gray-200" />
            <NavLink onClick={() => dispatch(modalSideBar())} className={'w-full text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200'} to={'/Tarixiy'}>Tarixiy</NavLink>
            <hr className="border-t border-gray-200" />
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div>
        <Header />
      </div>

      {/* OUTLET */}
      <div className="overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
