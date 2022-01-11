import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import BillPay from './BillPay'
import Login from './Login'
import PageNotFound from './PageNotFound'
import { AuthProvider } from '../contexts/AuthContext'
import RequireAuth from './RequireAuth'
import BankAPI from '../contexts/BankAPI'
import Header from './Header'
import { Container } from '@material-ui/core'
import TransactionPage from './TransactionPage'

export default function App() {

  const currentURL = window.location.href;
  console.log(currentURL)

  return (
    <AuthProvider>
      <BankAPI>
        <BrowserRouter>
          <Header bankName="Neptune Bank" />
          <Container maxWidth="lg" style={{ marginTop: "2em" }}>
            <Routes>
              <Route exact path="/" element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              } />
              <Route path="/transactions/:id" element={
                <RequireAuth>
                  <TransactionPage />
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
          </Container>

        </BrowserRouter>
      </BankAPI>
    </AuthProvider>

  )
}
