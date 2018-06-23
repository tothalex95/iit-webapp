import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { InformationModule } from "./information/information.module";
import { EducationModule } from "./education/education.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        InformationModule,
        EducationModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
    constructor() {
        
    }
}