import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { HomeComponent } from "./home/home.component";
import { ChartComponent } from "./chart/chart.component";
import { TextComponent } from "./text/text.component";
import { DbDemoComponent } from "./db-demo/db-demo.component";

//const routes: Routes = [
 //   { path: "", redirectTo: "/items", pathMatch: "full" },
 //   { path: "items", component: ItemsComponent },
 //   { path: "item/:id", component: ItemDetailComponent },
//];

const routes: Routes = [
    { path: "", component: DbDemoComponent }, 
    //{ path: "", redirectTo: "/home", pathMatch: "full" },    
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "list", component: ListComponent }, 
    { path: "chart", component: ChartComponent }, 
    { path: "text", component: TextComponent }, 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }