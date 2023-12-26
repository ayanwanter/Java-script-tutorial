const accountId = 144553
let accountEmail = "ayan@google.com"
var accountPassword = "12345"
accountCity = "Gujrat"

//accountId = 2 // not allowed

accountEmail = "Ac@Ac.com"
accountPassword = "Mann$1212@A1"
accountCity = "Lahore"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of some of issues in block scope and functional scope
*/

console.table([accountEmail, accountCity, accountPassword, accountId, accountState])