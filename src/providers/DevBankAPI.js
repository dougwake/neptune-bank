
export default function api() {
    return {
        currentUser: {
            uid: 111,
            email: "bob@example.com",
            name: "Bob"
        },
        getAccounts: function (userID) {
            return new Promise((resolve, reject) => {
                resolve(["Checking", "Savings", "Visa"])
            })
        }
    }
}
