import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { aqar, remainder } from '../models/models';
let MemberComponent = class MemberComponent {
    constructor(router2, httpClient, api, myAuth, router) {
        this.router2 = router2;
        this.httpClient = httpClient;
        this.api = api;
        this.myAuth = myAuth;
        this.router = router;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let item = '';
            this.router2.params.subscribe(parameter => {
                this.name = parameter['item'];
                console.log(parameter['item']);
            });
            if (yield this.api.isAnonymous()) {
                console.log("you are Anonymous");
            }
            else
                console.log("you are not Anonymous");
            // this.myAuth.auth.onAuthStateChanged(firebase => { 
            //   if(firebase){
            //     this.router.navigate(["/member"]);
            //     console.log(firebase.email) ;
            //     this.isLogIn=firebase;
            //   }else{
            //     this.router.navigate(["/"]);
            //   }
            // });
        });
    }
    signout() {
        this.api.logOut();
    }
    addRemainder() {
        console.log(this.api.getUser());
        let newAqar = new aqar("vava", "jhdsfjhdjsfh", "121", "/sadsad");
        let remainder2 = new remainder("title", "fsd", "fdsd");
        this.api.addReminder(newAqar, remainder2);
    }
    pullMyHistory() {
        console.log(" pullMyHistory working");
        this.api.pullMyHistory();
    }
    pullMyRemainders() {
        this.api.pullMyRemainders();
    }
    logOut() {
        this.api.logOut();
    }
    remindersPage() {
        this.router.navigate(['/reminder']);
    }
    itemListPage() {
        this.router.navigate(['/itemList']);
    }
    myItemsPage() {
        this.router.navigate(['/myItems']);
    }
};
MemberComponent = tslib_1.__decorate([
    Component({
        selector: 'app-member',
        templateUrl: './member.component.html',
        styleUrls: ['./member.component.css']
    })
], MemberComponent);
export { MemberComponent };
//# sourceMappingURL=member.component.js.map