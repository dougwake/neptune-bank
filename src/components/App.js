import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import BillPay from './BillPay'
import PageNotFound from './PageNotFound'

export default function App() {
  return (
    <>
      <h1>Neptune Bank</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/billpay" element={<BillPay />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
