import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { user } from '../models/models';
let RegisterComponent = class RegisterComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.user = new user();
    }
    ngOnInit() {
    }
    logInPage() {
        this.router.navigate(['/login']);
    }
    //make sure the passwords are the same===================================================
    passwordCheck() {
        var password = document.getElementById("password").value;
        var repassowrd = document.getElementById("re-password").value;
        if (password == repassowrd) {
            this.signUp();
        }
        else {
            alert('the two passwords that you entered are not the same!');
        }
    }
    signUp() {
        var name = document.getElementById("name").value;
        var mail = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var password = document.getElementById("password").value;
        this.user.name = name;
        this.user.email = mail;
        this.user.phone = phone;
        this.user.password = password;
        this.api.signUp(this.user);
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map