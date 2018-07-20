import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EducationRoutingModule } from "./education-routing.module";
import { EducationComponent } from "./education.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { CoursesComponent } from "./courses/courses.component";

import { MaterialDesignModule } from "../common/material-design.module";

@NgModule({
    imports: [
        CommonModule,
        EducationRoutingModule,
        MaterialDesignModule
    ],
    declarations: [
        EducationComponent,
        CatalogueComponent,
        CoursesComponent
    ]
})
export class EducationModule {
    constructor() {
        
    }
}