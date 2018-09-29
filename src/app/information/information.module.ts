import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { MaterialDesignModule } from "../common/material-design.module";
import { ContactComponent } from "./contact/contact.component";
import { InformationRoutingModule } from "./information-routing.module";
import { InformationComponent } from "./information.component";
import { RatingsComponent } from "./ratings/ratings.component";
import { RatingsService } from "./ratings/ratings.service";
import { HourPipe } from "./timetable/hour.pipe";
import { TimetableComponent } from "./timetable/timetable.component";

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
        RatingsComponent,
        HourPipe
    ],
    providers: [
        RatingsService
    ]
})
export class InformationModule { }
