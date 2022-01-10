import React, { useContext } from 'react'
import api from '../providers/DevBankAPI'

const BankAPIContext = React.createContext()

export function useBankAPI() {
  return useContext(BankAPIContext)
}

export default function BankAPI({ children }) {

  return (
    <BankAPIContext.Provider value={api()} >
      {children}
    </BankAPIContext.Provider >
  );
}


