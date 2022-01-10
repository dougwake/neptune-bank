
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
        }
    }
}
