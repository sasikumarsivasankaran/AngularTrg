"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validate {
    validate(user) {
        let result = false;
        if (user.username === 'ramesh') {
            result = true;
        }
        return result;
    }
}
let obj = new Validate();
let user = { username: 'ramesh', role: 'admin', mobileNumber: 999999999 };
console.log(obj.validate(user));
