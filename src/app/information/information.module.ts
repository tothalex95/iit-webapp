import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { InformationComponent } from "./information.component";
import { InformationRoutingModule } from "./information-routing.module";
import { ContactComponent } from "./contact/contact.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { RatingsComponent } from "./ratings/ratings.component";
import { RatingsService } from "./ratings/ratings.service";

import { MaterialDesignModule } from "../common/material-design.module";

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        InformationRoutingModule,
        MaterialDesignModule
    ],
    declarations: [
        InformationComponent,
        ContactComponent,
        TimetableComponent,
        RatingsComponent
    ],
    providers: [
        RatingsService
    ]
})
export class InformationModule { }
