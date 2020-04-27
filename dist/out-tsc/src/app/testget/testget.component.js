import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let TestgetComponent = class TestgetComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            // get the username out of the route params
            this.username = params['name'];
            console.log(this.username);
            // now we can go grab user data from github    
        });
    }
};
TestgetComponent = tslib_1.__decorate([
    Component({
        selector: 'app-testget',
        templateUrl: './testget.component.html',
        styleUrls: ['./testget.component.css']
    })
], TestgetComponent);
export { TestgetComponent };
//# sourceMappingURL=testget.component.js.map