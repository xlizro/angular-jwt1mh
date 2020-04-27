import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { user, aqar, remainder } from '../models/models';
let LoginComponent = class LoginComponent {
    constructor(myAuth, api, httpClient, router) {
        this.myAuth = myAuth;
        this.api = api;
        this.httpClient = httpClient;
        this.router = router;
        this.user = new user();
    }
    ngOnInit() {
        this.myAuth.auth.onAuthStateChanged(firebase => {
            if (firebase) {
                this.router.navigate(["/member"]);
                this.isLogIn = firebase;
            }
        });
    }
    logIn() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        // this.user=new user("",email,"",password);
        this.api.logIn(email, password);
    }
    signUp() {
        var mail = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        this.user.email = mail;
        this.user.password = password;
        let signUpuser = new user("naif", "naifali14@gmail.com", "05555", "123456");
        this.api.signUp(signUpuser);
    }
    logOut() {
        this.api.logOut();
    }
    addAqar() {
        this.api.addaqar();
    }
    pullAllAqars() {
        return this.api.pullAqars();
    }
    searchAqar() {
        this.api.searchAqar("name");
    }
    addRemainder() {
        console.log(this.user.email);
        let newAqar = new aqar("vava", "jhdsfjhdjsfh", "121", "/sadsad");
        let remainder2 = new remainder("title", "fsd", "fdsd");
        this.api.addReminder(newAqar, remainder2);
    }
    details() {
    }
    signUpAno() {
        this.api.signInAsGuset();
    }
    guest() {
        this.api.signInAsGuset();
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map