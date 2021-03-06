const checkingTransactions = [

  { id: 7632, date: Date.parse("12/16/21"), description: "Best Buy", amount: -92.67, balance: 15540.72 },
  { id: 7631, date: Date.parse("12/16/21"), description: "Amazon", amount: -56.18, balance: 15633.39 },
  { id: 7630, date: Date.parse("12/15/21"), description: "Apple", amount: -7.99, balance: 15689.57 },
  { id: 7629, date: Date.parse("12/15/21"), description: "Whole Foods", amount: -85.22, balance: 15697.56 },
  { id: 7628, date: Date.parse("12/15/21"), description: "Sears", amount: -18.65, balance: 15782.78 },
  { id: 7627, date: Date.parse("12/15/21"), description: "Payroll", amount: 1000.00, balance: 15801.43 },
  { id: 7626, date: Date.parse("12/13/21"), description: "Best Buy", amount: -126.28, balance: 14801.43 },
  { id: 7625, date: Date.parse("12/13/21"), description: "Groceries", amount: -73.18, balance: 14927.71 },
  { id: 7624, date: Date.parse("12/13/21"), description: "Interest", amount: 1.26, balance: 15000.89 },
  { id: 7623, date: Date.parse("12/04/21"), description: "Healthcare", amount: -25.00, balance: 14999.63 },
  { id: 7622, date: Date.parse("12/04/21"), description: "CVS", amount: -32.18, balance: 15024.63 },
  { id: 7621, date: Date.parse("12/01/21"), description: "Whole Foods", amount: -77.53, balance: 15056.81 },
  { id: 7620, date: Date.parse("11/26/21"), description: "Amazon", amount: -123.48, balance: 15134.34 },
  { id: 7619, date: Date.parse("11/25/21"), description: "Apple", amount: -12.88, balance: 15257.82 },
  { id: 7618, date: Date.parse("11/21/21"), description: "Payroll", amount: 500.00, balance: 15270.70 },
  { id: 7617, date: Date.parse("11/20/21"), description: "Healthcare", amount: -37.29, balance: 14770.70 },
  { id: 7616, date: Date.parse("11/19/21"), description: "Groceries", amount: -22.87, balance: 14807.99 },
  { id: 7615, date: Date.parse("11/19/21"), description: "Interest", amount: 1.18, balance: 14830.86 },
  { id: 7614, date: Date.parse("11/18/21"), description: "Supplies", amount: -108.39, balance: 14829.68 },
  { id: 7613, date: Date.parse("11/18/21"), description: "Amazon", amount: -61.93, balance: 14938.07 },
  { id: 7612, date: Date.parse("11/17/21"), description: "Opening Balance", amount: 15000.00, balance: 15000.00 }

]

const savingsTransactions = [

  { id: 112782, date: Date.parse("12/16/21"), description: "Deposit", amount: 971.51, balance: 4378.96 },
  { id: 112781, date: Date.parse("12/16/21"), description: "Deposit", amount: 166.18, balance: 3407.45 },
  { id: 112780, date: Date.parse("12/15/21"), description: "Deposit", amount: 600.44, balance: 3241.27 },
  { id: 112779, date: Date.parse("12/15/21"), description: "Withdrawal", amount: -451.81, balance: 2640.83 },
  { id: 112778, date: Date.parse("12/15/21"), description: "Deposit", amount: 251.23, balance: 3092.64 },
  { id: 112777, date: Date.parse("12/15/21"), description: "Deposit", amount: 271.68, balance: 2841.41 },
  { id: 112776, date: Date.parse("12/13/21"), description: "Deposit", amount: 475.48, balance: 2569.73 },
  { id: 112775, date: Date.parse("12/13/21"), description: "Deposit", amount: 377.81, balance: 2094.25 },
  { id: 112774, date: Date.parse("12/13/21"), description: "Withdrawal", amount: -989.43, balance: 1716.44 },
  { id: 112773, date: Date.parse("12/04/21"), description: "Deposit", amount: 843.97, balance: 2705.87 },
  { id: 112772, date: Date.parse("12/04/21"), description: "Deposit", amount: 335.12, balance: 1861.90 },
  { id: 112771, date: Date.parse("12/01/21"), description: "Deposit", amount: 526.78, balance: 1526.78 },
  { id: 112770, date: Date.parse("11/17/21"), description: "Open Account", amount: 1000.00, balance: 1000.00 }

]

const visaTransactions = [

  { id: 33851, date: Date.parse("12/15/21"), description: "Sporting Goods", amount: -49.44, balance: -87.03 },
  { id: 33850, date: Date.parse("12/14/21"), description: "Payment", amount: 200.00, balance: -37.59 },
  { id: 33849, date: Date.parse("12/14/21"), description: "Sears", amount: -40.41, balance: -237.59 },
  { id: 33848, date: Date.parse("12/08/21"), description: "Apple", amount: -77.76, balance: -197.18 },
  { id: 33847, date: Date.parse("12/06/21"), description: "Payment", amount: 345.00, balance: -119.42 },
  { id: 33846, date: Date.parse("12/01/21"), description: "Best Buy", amount: -117.51, balance: -464.42 },
  { id: 33845, date: Date.parse("11/30/21"), description: "Amazon", amount: -94.82, balance: -346.91 },
  { id: 33844, date: Date.parse("11/27/21"), description: "CVS", amount: -79.36, balance: -252.09 },
  { id: 33843, date: Date.parse("11/24/21"), description: "Whole Foods", amount: -71.09, balance: -172.73 },
  { id: 33842, date: Date.parse("11/19/21"), description: "Groceries", amount: -101.64, balance: -101.64 },
  { id: 33841, date: Date.parse("10/27/21"), description: "Payment", amount: 240.06, balance: 0.00 },
  { id: 33840, date: Date.parse("10/27/21"), description: "Apple", amount: -88.62, balance: -240.06 },
  { id: 33839, date: Date.parse("10/24/21"), description: "Amazon", amount: -139.26, balance: -151.44 },
  { id: 33838, date: Date.parse("10/10/21"), description: "Best Buy", amount: -12.18, balance: -12.18 }

]

function normalizePageNumber(length, pageNumber, numPerPage) {
  let maxPage = Math.max(1, Math.ceil(length / numPerPage))
  let result = Math.min(maxPage, pageNumber)
  return result;
}

export default function api() {

  return {
    currentUser: {
      uid: 111,
      email: "bob@example.com",
      name: "Bob"
    },

    getAccounts: function (userID) {
      return new Promise((resolve, reject) => {
        resolve([
          {
            id: "67382919383571",
            name: "Checking",
            balance: checkingTransactions[0].balance,
            routingNumber: "7 77 777777",
            accountNumber: "...3571"
          },
          {
            id: "6883939565739",
            name: "Savings",
            balance: savingsTransactions[0].balance,
            routingNumber: "7 77 777777",
            accountNumber: "...5739"
          },
          {
            id: "4000-0000-0000-4810",
            name: "Visa",
            balance: visaTransactions[0].balance,
            accountNumber: "...4810"
          }
        ]
        )
      })
    },

    getTransactions: function (accountID, pageNumber = 1, numPerPage = 5) {
      pageNumber = normalizePageNumber(checkingTransactions.length, pageNumber, numPerPage)
      let totalPages = Math.ceil(checkingTransactions.length / numPerPage)
      let startIndex = (pageNumber - 1) * numPerPage
      let endIndex = startIndex + numPerPage

      if (accountID === "67382919383571") {
        return new Promise((resolve, reject) => {
          resolve({
            header: {
              pageNumber,
              numPerPage,
              totalPages
            },
            transactions: checkingTransactions.slice(startIndex, endIndex)
          })
        })
      } else if (accountID === "6883939565739") {
        return new Promise((resolve, reject) => {
          resolve({
            header: {
              pageNumber,
              numPerPage,
              totalPages: Math.ceil(savingsTransactions.length / numPerPage)
            },
            transactions: savingsTransactions.slice(startIndex, endIndex)
          })
        })
      } else if (accountID === "4000-0000-0000-4810") {
        return new Promise((resolve, reject) => {
          resolve({
            header: {
              pageNumber,
              numPerPage,
              totalPages: Math.ceil(visaTransactions.length / numPerPage)
            },
            transactions: visaTransactions.slice(startIndex, endIndex)
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve([])
        })
      }
    },

    getBillPayHistory: function (userID) {
      return new Promise((resolve, reject) => {
        resolve([

          { id: 999, payee: "Electric", fromAccount: "Checking", amount: 85.27, arrivalDate: Date.parse("12/18/2021") },
          { id: 998, payee: "Cable", fromAccount: "Checking", amount: 55.88, arrivalDate: Date.parse("12/11/2021") },
          { id: 997, payee: "Rent", fromAccount: "Savings", amount: 1285, arrivalDate: Date.parse("12/1/2021") },
          
          { id: 996, payee: "Electric", fromAccount: "Checking", amount: 90.13, arrivalDate: Date.parse("11/18/2021") },
          { id: 995, payee: "Cable", fromAccount: "Checking", amount: 56.05, arrivalDate: Date.parse("11/10/2021") },
          { id: 994, payee: "Subscription", fromAccount: "Checking", amount: 49.72, arrivalDate: Date.parse("11/10/2021") },
          { id: 993, payee: "Rent", fromAccount: "Savings", amount: 1285, arrivalDate: Date.parse("11/1/2021") },
          
          { id: 992, payee: "Electric", fromAccount: "Checking", amount: 76.29, arrivalDate: Date.parse("10/20/2021") },
          { id: 991, payee: "Cable", fromAccount: "Checking", amount: 55.32, arrivalDate: Date.parse("10/12/2021") },
          { id: 990, payee: "Rent", fromAccount: "Savings", amount: 1285, arrivalDate: Date.parse("10/1/2021") },
          

        ])
      })
    }


  }
}
