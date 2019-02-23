"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var list_component_1 = require("./list/list.component");
var home_component_1 = require("./home/home.component");
var chart_component_1 = require("./chart/chart.component");
var text_component_1 = require("./text/text.component");
var retirement_plan_component_1 = require("./retirement-plan/retirement-plan.component");
var retirement_input_component_1 = require("./retirement-input/retirement-input.component");
//const routes: Routes = [
//   { path: "", redirectTo: "/items", pathMatch: "full" },
//   { path: "items", component: ItemsComponent },
//   { path: "item/:id", component: ItemDetailComponent },
//];
var routes = [
    { path: "", component: text_component_1.TextComponent },
    //{ path: "", component: DbDemoComponent },
    //{ path: "", component: RetirementInputComponent }, 
    { path: "retirementInput", component: retirement_input_component_1.RetirementInputComponent },
    { path: "retirementChart", component: retirement_plan_component_1.RetirementPlanComponent },
    //{ path: "", redirectTo: "/home", pathMatch: "full" },    
    { path: "home", component: home_component_1.HomeComponent },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "chart", component: chart_component_1.ChartComponent },
    { path: "text", component: text_component_1.TextComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUt2RSwyREFBeUQ7QUFDekQsd0RBQXNEO0FBQ3RELHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsd0RBQXNEO0FBRXRELHlGQUFzRjtBQUN0Riw0RkFBeUY7QUFFekYsMEJBQTBCO0FBQ3pCLDJEQUEyRDtBQUMzRCxrREFBa0Q7QUFDbEQsMERBQTBEO0FBQzNELElBQUk7QUFFSixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDdEMsMkNBQTJDO0lBQzNDLHFEQUFxRDtJQUNyRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUscURBQXdCLEVBQUU7SUFDaEUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLG1EQUF1QixFQUFFO0lBQy9ELDJEQUEyRDtJQUMzRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQzdDLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2xpc3QvbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gXCIuL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGV4dENvbXBvbmVudCB9IGZyb20gXCIuL3RleHQvdGV4dC5jb21wb25lbnRcIjtcbmltcG9ydCB7IERiRGVtb0NvbXBvbmVudCB9IGZyb20gXCIuL2RiLWRlbW8vZGItZGVtby5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJldGlyZW1lbnRQbGFuQ29tcG9uZW50IH0gZnJvbSBcIi4vcmV0aXJlbWVudC1wbGFuL3JldGlyZW1lbnQtcGxhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJldGlyZW1lbnRJbnB1dENvbXBvbmVudCB9IGZyb20gXCIuL3JldGlyZW1lbnQtaW5wdXQvcmV0aXJlbWVudC1pbnB1dC5jb21wb25lbnRcIjtcblxuLy9jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAvLyAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaXRlbXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuIC8vICAgeyBwYXRoOiBcIml0ZW1zXCIsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAvLyAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbi8vXTtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IFRleHRDb21wb25lbnQgfSxcbiAgICAvL3sgcGF0aDogXCJcIiwgY29tcG9uZW50OiBEYkRlbW9Db21wb25lbnQgfSxcbiAgICAvL3sgcGF0aDogXCJcIiwgY29tcG9uZW50OiBSZXRpcmVtZW50SW5wdXRDb21wb25lbnQgfSwgXG4gICAgeyBwYXRoOiBcInJldGlyZW1lbnRJbnB1dFwiLCBjb21wb25lbnQ6IFJldGlyZW1lbnRJbnB1dENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJyZXRpcmVtZW50Q2hhcnRcIiwgY29tcG9uZW50OiBSZXRpcmVtZW50UGxhbkNvbXBvbmVudCB9LFxuICAgIC8veyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSwgICAgXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSwgXG4gICAgeyBwYXRoOiBcImNoYXJ0XCIsIGNvbXBvbmVudDogQ2hhcnRDb21wb25lbnQgfSwgXG4gICAgeyBwYXRoOiBcInRleHRcIiwgY29tcG9uZW50OiBUZXh0Q29tcG9uZW50IH0sIFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH0iXX0=