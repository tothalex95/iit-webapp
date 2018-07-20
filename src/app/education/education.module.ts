import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EducationRoutingModule } from "./education-routing.module";
import { EducationComponent } from "./education.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";

import { MaterialDesignModule } from "../common/material-design.module";

@NgModule({
    imports: [
        CommonModule,
        EducationRoutingModule,
        MaterialDesignModule
    ],
    declarations: [
        EducationComponent,
        CatalogueComponent
    ]
})
export class EducationModule {
    constructor() {
        
    }
}