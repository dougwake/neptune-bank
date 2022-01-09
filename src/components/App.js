import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import BillPay from './BillPay'
import Login from './Login'
import PageNotFound from './PageNotFound'
import { AuthProvider } from '../contexts/AuthContext'
import RequireAuth from './RequireAuth'

export default function App() {
  return (
    <AuthProvider>
      <h1>Neptune Bank</h1>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />
          <Route path="/billpay" element={
            <RequireAuth>
              <BillPay />
            </RequireAuth>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}
