import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoadingPageComponent = class LoadingPageComponent {
    constructor(router) {
        this.router = router;
        this.router.navigate(['']);
        setTimeout(() => {
            this.router.navigate(['/login']);
        }, 3000);
    }
    ngOnInit() {
    }
};
LoadingPageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loading-page',
        templateUrl: './loading-page.component.html',
        styleUrls: ['./loading-page.component.css']
    })
], LoadingPageComponent);
export { LoadingPageComponent };
//# sourceMappingURL=loading-page.component.js.map