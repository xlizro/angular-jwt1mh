import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemInfoComponent = class ItemInfoComponent {
    constructor(api, router, route, db) {
        this.api = api;
        this.router = router;
        this.route = route;
        this.db = db;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.route.params.subscribe(params => {
                // get the name out of the route params
                this.username = params['name'];
                console.log(this.username);
            });
            yield this.api.getAqarInfo(this.username).then(v => {
                this.aqar = v;
            });
            console.log(this.aqar);
        });
    }
    itemListPage() {
        this.router.navigate(['/itemList']);
    }
    setReminder() {
        this.router.navigate(['/setReminder']);
    }
};
ItemInfoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-info',
        templateUrl: './item-info.component.html',
        styleUrls: ['./item-info.component.css']
    })
], ItemInfoComponent);
export { ItemInfoComponent };
//# sourceMappingURL=item-info.component.js.map