import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Heart,
  Bell,
  User,
  ChevronDown,
  BookOpenText,
  AlignJustify,
  LogOut,
} from "lucide-react";
import { navbarList } from "../constants/navbarList";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isNotification, modalSideBar, showLoginModal, showSignUpModal } from "../features/uiSlice";
import Notification from "../pages/Notification";
import { useDebounce } from "use-debounce";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // ✅ yangi search query
  const [debouncedSearch] = useDebounce(searchQuery, 500); // ✅ debounce
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const res = useSelector((state) => state.uiSlice.isNotificationOpen);
  const userDropdownRef = useRef();

  // LocalStorage dan user
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  // Search trigger
  useEffect(() => {
    if (debouncedSearch.trim()) {
      navigate(`/search?query=${encodeURIComponent(debouncedSearch.trim())}`);
    }
  }, [debouncedSearch, navigate]);

  // Click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setIsUserDropdownOpen(false);
  };

  return (
    <header className="w-full lg:px-10 md:px-4 shadow-md sticky top-0 z-40 bg-white">
      <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <span className="text-lg sm:text-xl flex items-center gap-3 lg:text-2xl font-semibold text-gray-800">
            <BookOpenText size={50} />
            OnlineKitob
          </span>

          {/* Search input (desktop only) */}
          <div className="hidden sm:flex items-center w-48 sm:w-64 lg:w-80 h-11 sm:h-12 rounded-2xl border border-gray-300 shadow bg-white pl-3 pr-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 text-base sm:text-lg text-gray-800 placeholder-gray-500 outline-none bg-transparent"
            />
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center md:gap-8 gap-4">
          <NavLink to="/likes">
            <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-copy hover:text-blue-600 cursor-pointer transition" />
          </NavLink>

          <button onClick={() => dispatch(isNotification())}>
            <Bell className="w-6 h-6 sm:w-7 sm:h-7 text-copy hover:text-blue-600 cursor-pointer transition" />
          </button>

          {res && (
            <div className="absolute text-copy">
              <Notification />
            </div>
          )}

          <div className="relative" ref={userDropdownRef}>
            <User
              onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              className="w-6 h-6 sm:w-7 sm:h-7 text-copy hover:text-blue-600 cursor-pointer transition"
            />
            {isUserDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-50">
                {loggedInUser ? (
                  <div className="px-4 py-1 text-sm text-gray-700">
                    <p className="font-semibold">{loggedInUser.fullName}</p>
                    <p className="text-sm text-gray-500">{loggedInUser.email}</p>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-2 py-2 hover:bg-gray-100 text-left text-red-600"
                    >
                      <LogOut size={16} />
                      Chiqish
                    </button>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        dispatch(showLoginModal());
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        dispatch(showSignUpModal());
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <div onClick={() => dispatch(modalSideBar())} className="sm:hidden">
            <AlignJustify className="w-7 h-7 text-copy hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile search input */}
      <div className="block sm:hidden px-4 pb-3">
        <div className="flex items-center w-full h-10 rounded-xl border border-gray-300 shadow-sm bg-white pl-3 pr-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 text-sm text-gray-800 placeholder-gray-500 outline-none bg-transparent"
          />
          <Search className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="relative hidden sm:flex items-center flex-nowrap justify-center lg:gap-4 xl:gap-6 text-base xl:text-lg text-copy  pb-3 px-4 lg:px-10">
        {navbarList.map((item) => (
          <NavLink key={item.id} to={item.url}>
            <span className="hover:bg-gray-100 whitespace-nowrap sm:px-1 md:px-4 py-3 rounded-full transition cursor-pointer">
              {item.title}
            </span>
          </NavLink>
        ))}

        <div className="relative">
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-1 whitespace-nowrap cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100 transition"
          >
            <span>Jáne basqa toparlar</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </div>

          {isDropdownOpen && (
            <div className="absolute top-12 -left-20 bg-white shadow-lg border border-gray-200 rounded-xl w-70 z-40">
              <NavLink
                to="/Dramma"
                className="block px-4 py-2 hover:bg-gray-100 lg:text-lg text-base"
                onClick={() => setIsDropdownOpen(false)}
              >
                Dramma
              </NavLink>
              <NavLink
                to="/Tarixiy"
                className="block px-4 py-2 hover:bg-gray-100 lg:text-lg text-base"
                onClick={() => setIsDropdownOpen(false)}
              >
                Tarixiy
              </NavLink>
            </div>
          )}
        </div>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        <NavLink to={"/contact"} className="hover:bg-gray-100 lg:px-10 px-1 py-2 rounded-full transition cursor-pointer">
          Aloqa
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
