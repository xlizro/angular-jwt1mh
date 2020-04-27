import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SetReminderComponent = class SetReminderComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
    }
    reminderPage() {
        this.router.navigate(['/reminder']);
    }
};
SetReminderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-set-reminder',
        templateUrl: './set-reminder.component.html',
        styleUrls: ['./set-reminder.component.css']
    })
], SetReminderComponent);
export { SetReminderComponent };
//# sourceMappingURL=set-reminder.component.js.map