var Transaction = require('./Transaction');
var UserTransaction = require('./UserTransaction').UserTransaction;
var User = require('./User').User;
var Utils = require('./Utils').Utils;

var {
    TRANSACTION_TYPE_CREDIT,
    TRANSACTION_TYPE_DEBIT,
}  = require('./constant');
const { use } = require('express/lib/router');

class sharing {
    #users
    #transaction
    #user_transaction

    constructor() {
        this.#users = {}
        this.#transaction = {}
        this.#user_transaction = {}
    }

    get Users() {
        return this.#users
    }

    get Transactions() {
        return this.#transaction
    }
    get UserTransactions() {
        return this.#user_transaction
    }
    set Users(users) {
        return this.#users = users;
    }

    set Transactions(transactions) {
        return this.#transaction = transactions;
    }

    set Users(user_transactions) {
        return this.#user_transaction = user_transactions;
    }

    addUser (name, email, phone) {
        try {
            var user = User.createUser(name, email, phone)

            this.Users = {
                ...this.Users,
                [user.Phone]: user
            }

            return Utils.success(user);
        } catch(err) {
            return Utils.failed(err);
        }
    }

    addTransaction(payerPhone, expense_type, amount, payee){
        try {
            var Payer = this.findUser(payerPhone)
            var tran = Transaction.createTransaction(payer.ID, expense_type, amount, payee)

            this.Transactions = {
                ...this.Transactions,
                [tran.ID]: tran
            }

            var ut = UserTransaction.createUserTransaction(tran.ID, TRANSACTION_TYPE_DEBIT, amount)
            this.UserTransactions = {
                ...this.UserTransactions,
                [ut.ID] : ut
            }

            for (let i = 0; i<payee.length; i++){
                let phone = payee[i];
                let user = this.findUser(phone);
                let share = Utils.getShare(payee, amount, expense_type)
                let t = UserTransaction.createUserTransaction(tan.ID, user.ID, TRANSACTION_TYPE_DEBIT, share)

                this.UserTransactions = {
                    ...this.UserTransactions,
                    [t.ID] : t
                }
            }

            return Utils.success(tran)
        } catch (err) {
            return Utils.failed(err);
        }
        
    }
    findUser (phone) {
        if(this.Users[phone] ===  undefined){
            throw "User not found"
        }

        return this.Users[phone]
    }
}

module.exports.sharing = sharing