import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InformationComponent } from "./information.component";
import { ContactComponent } from "./contact/contact.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { RatingsComponent } from "./ratings/ratings.component";

const informationRoutes: Routes = [
    {
        path: "information",
        component: InformationComponent,
        children: [
            {
                path: "contact",
                component: ContactComponent
            },
            {
                path: "timetable",
                component: TimetableComponent
            },
            {
                path: "ratings",
                component: RatingsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(informationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class InformationRoutingModule {
    constructor() {
        
    }
}