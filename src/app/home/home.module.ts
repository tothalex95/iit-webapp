import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { MaterialDesignModule } from "../common/material-design.module";

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialDesignModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
