import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemListComponent = class ItemListComponent {
    constructor(router2, api, router) {
        this.router2 = router2;
        this.api = api;
        this.router = router;
        this.listOfAqar = [];
    }
    //  searched:boolean = true;
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.router2.params.subscribe(parameter => {
                this.name = parameter['item'];
                console.log(parameter['item']);
            });
            this.listOfAqar = yield this.api.pullAqars();
            console.log(this.listOfAqar);
        });
    }
    itemInfo() {
        this.router.navigate(['/itemInfo']);
    }
    membersPage() {
        this.router.navigate(['/member']);
    }
    search() {
        //check the content then send it ====================================================
        var x = document.getElementById("scroll");
        var y = document.getElementById("searchedItem");
        var name = document.getElementById("search").value;
        console.log(name);
        let item = this.api.searchAqar(name);
        console.log(item);
        if (x.style.display === "block") {
            x.style.display = "none";
            y.style.display = "block";
        }
        else {
            y.style.display = "none";
            x.style.display = "block";
        }
    }
};
ItemListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item-list',
        templateUrl: './item-list.component.html',
        styleUrls: ['./item-list.component.css']
    })
], ItemListComponent);
export { ItemListComponent };
//# sourceMappingURL=item-list.component.js.map