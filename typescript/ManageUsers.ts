import { User } from "./user";

class Validate {
    
    validate(user:User):boolean {
        let result = false;
        if(user.username === 'ramesh') {
            result = true;
        }
        return result;
    }
}

let obj = new Validate();
let user:User = {username:'ramesh',role:'admin',mobileNumber:999999999};
console.log(obj.validate(user));