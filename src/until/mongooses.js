module.exports = {
    multipleAccountToObject (accounts) {
        return accounts.map(account => {
            accounts.toObject()
        })
    },

    mongooseToObject (account) {
        return account ? account.toObject() : undefined
    }
}