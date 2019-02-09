import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { HomeComponent } from "./home/home.component";
import { ChartModule } from "./chart/chart.module" 
import { TextComponent } from "./text/text.component";
import { DbDemoComponent } from './db-demo/db-demo.component';
//import { NativeScriptRouterModule } from "nativescript-angular/router";
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule, 
        AppRoutingModule,
        NativeScriptHttpModule,
        NativeScriptUIListViewModule,
        ChartModule,
        //NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemDetailComponent,
        LoginComponent,
        ListComponent,
        HomeComponent,
        TextComponent,
        DbDemoComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
