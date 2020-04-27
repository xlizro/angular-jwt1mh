import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MyItemsComponent = class MyItemsComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.api.pullMyHistory().then(v => {
                console.log(v);
            });
        });
    }
    membersPage() {
        this.router.navigate(['/member']);
    }
    itemInfo() {
        this.router.navigate(['/itemInfo']);
    }
};
MyItemsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-my-items',
        templateUrl: './my-items.component.html',
        styleUrls: ['./my-items.component.css']
    })
], MyItemsComponent);
export { MyItemsComponent };
//# sourceMappingURL=my-items.component.js.map