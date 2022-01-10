
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
            id: "3571",
            name: "Checking",
            balance: 15235.07,
            accountNumber: "...3571"
          },
          {
            id: "5739",
            name: "Savings",
            balance: 56187.72,
            accountNumber: "...5739"
          },
          {
            id: "4810",
            name: "Visa",
            balance: 786.35,
            accountNumber: "...4810"
          }
        ]
        )
      })
    },
    getTransactions: function (accountID) {
      if (accountID === "3571") {
        return new Promise((resolve, reject) => {
          resolve([
            {
              id: 1,
              date: Date.parse("24 Dec 2020"),
              description: "Best Buy",
              amount: "95.62",
              balance: 15235.07
            }
          ])
        })
      } else if (accountID === "5739") {
        return new Promise((resolve, reject) => {
          resolve([])
        })
      } else if (accountID === "4810") {
        return new Promise((resolve, reject) => {
          resolve([])
        })
      } else {
        return new Promise((resolve, reject) => {
          resolve([])
        })
      }
    }
  }
}
