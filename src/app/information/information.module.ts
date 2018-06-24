import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InformationComponent } from "./information.component";
import { InformationRoutingModule } from "./information-routing.module";
import { ContactComponent } from "./contact/contact.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { RatingsComponent } from "./ratings/ratings.component";

@NgModule({
    imports: [
        CommonModule,
        InformationRoutingModule
    ],
    declarations: [
        InformationComponent,
        ContactComponent,
        TimetableComponent,
        RatingsComponent
    ]
})
export class InformationModule {
    constructor() {
        
    }
}