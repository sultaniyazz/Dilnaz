import { useEffect } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { getAllAdminData, getAllBooksData } from './api/request';
import Sarguzasht from './pages/Sarguzasht ';
import Qiyal from './pages/Qiyal';
import Fantastik from './pages/Fantastik';
import Psixologik from './pages/Psixologik ';
import Tarixiy from './pages/Tarixiy';
import CardDetail from './pages/Detail/CardDetail';
import Dramma from './pages/Dramma';
import Realistik from './pages/Realistik ';
import Likes from './pages/Likes';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import SearchResult from './pages/SearchPage';
const App = () => {
  const dispatch = useDispatch();
  const modalLoginForm = useSelector((state) => state.uiSlice.showLoginModal);
  const modalSignUpForm = useSelector((state) => state.uiSlice.showSignUpModal);

  useEffect(() => {
    dispatch(getAllBooksData('https://dilnazapi.onrender.com/books'));
    dispatch(getAllAdminData('https://sarbinazapiadmin.onrender.com/users'));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Sarguzasht />} />
        <Route path='/detail/:slug' element={<CardDetail />} />
        <Route path='Qiyal' element={<Qiyal />} />
        <Route path='Fantastik' element={<Fantastik />} />
        <Route path='Psixologik' element={<Psixologik />} />
        <Route path='Tarixiy' element={<Tarixiy />} />
        <Route path='Dramma' element={<Dramma />} />
        <Route path='Realistik' element={<Realistik />} />
        <Route path='likes' element={<Likes />} />
        <Route path="search" element={<SearchResult />} />
      </Route>
    )
  );
  return (
    <>
      {/* Login modal */}
      {modalLoginForm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
          <LoginForm onClose={() => dispatch(showLoginModal(false))} />
        </div>
      )}

      {/* ✅ Sign Up modal */}
      {modalSignUpForm && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
          <SignUpForm onClose={() => dispatch(showSignUpModal(false))} />
        </div>
      )}

      <RouterProvider router={router} />
    </>
  )
}

export default App