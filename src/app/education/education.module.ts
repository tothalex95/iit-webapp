import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { EducationRoutingModule } from "./education-routing.module";
import { EducationComponent } from "./education.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { DetailDialogComponent } from "./catalogue/detail-dialog/detail-dialog.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesService } from "./courses/courses.service";

import { MaterialDesignModule } from "../common/material-design.module";

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
        DetailDialogComponent,
        CoursesComponent
    ],
    entryComponents: [
        DetailDialogComponent
    ],
    providers: [
        CoursesService
    ]
})
export class EducationModule { }
