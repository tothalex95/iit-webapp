import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MaterialDesignModule } from "../common/material-design.module";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { InformationDialogComponent } from "./catalogue/information-dialog/information-dialog.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesService } from "./courses/courses.service";
import { EducationRoutingModule } from "./education-routing.module";
import { EducationComponent } from "./education.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EducationRoutingModule,
        MaterialDesignModule
    ],
    declarations: [
        EducationComponent,
        CatalogueComponent,
        InformationDialogComponent,
        CoursesComponent
    ],
    entryComponents: [
        InformationDialogComponent
    ],
    providers: [
        CoursesService
    ]
})
export class EducationModule { }
