var Sharing = require('./sharing').sharing
var Display = require('./Display').Display

var {
    EXPENSE_TYPE_EQUAL,
    EXPENSE_TYPE_EXACT
} = require('./constant');


var app = new Sharing()

var res = app.addUser("temp1", "example@gmail.com", 122421312)
console.log(res);

var res = app.addUser("temp2", "example2@gmail.com", 1312312)
console.log(res)

var res = app.addUser("temp3", "example3@gmail.com", 1312343)

var res = app.addTransaction(12313123, EXPENSE_TYPE_EQUAL, 1000 [
    24234524, 4343562523, 242424242
])
console.log(res);

var res = app.addTransaction(131431312, EXPENSE_TYPE_EXACT, 100 [131234123])
console.log(res);

Display.showUser(app.Users)
Display.showTransaction(app.Transactions)
Display.showUserTransaction(app.UserTransactions)