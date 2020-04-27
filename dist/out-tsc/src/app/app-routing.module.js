import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './login/login.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { RegisterComponent } from './register/register.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemInfoComponent } from './item-info/item-info.component';
import { ReminderComponent } from './reminder/reminder.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { SetReminderComponent } from './set-reminder/set-reminder.component';
const routes = [
    { path: '', component: LoadingPageComponent },
    { path: "member", component: MemberComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "itemList", component: ItemListComponent },
    { path: "itemInfo", component: ItemInfoComponent },
    { path: "reminder", component: ReminderComponent },
    { path: "myItems", component: MyItemsComponent },
    { path: "setReminder", component: SetReminderComponent },
    { path: "itemList/:name", component: ItemInfoComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map