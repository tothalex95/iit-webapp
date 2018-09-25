import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { InformationModule } from "./information/information.module";
import { EducationModule } from "./education/education.module";
import { MaterialDesignModule } from "./common/material-design.module";

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomeModule,
        InformationModule,
        EducationModule,
        MaterialDesignModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
