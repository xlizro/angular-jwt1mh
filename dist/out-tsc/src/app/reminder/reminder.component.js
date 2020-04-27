import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ReminderComponent = class ReminderComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
    }
    membersPage() {
        this.router.navigate(['/member']);
    }
    setReminder() {
        this.router.navigate(['/setReminder']);
    }
    deleteReminder() {
    }
};
ReminderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-reminder',
        templateUrl: './reminder.component.html',
        styleUrls: ['./reminder.component.css']
    })
], ReminderComponent);
export { ReminderComponent };
//# sourceMappingURL=reminder.component.js.map