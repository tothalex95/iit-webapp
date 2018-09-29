import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MaterialDesignModule } from "../common/material-design.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialDesignModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }
