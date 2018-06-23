import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EducationComponent } from "./education.component";

const educationRoutes: Routes = [
    {
        path: "education",
        component: EducationComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(educationRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EducationRoutingModule {
    constructor() {
        
    }
}