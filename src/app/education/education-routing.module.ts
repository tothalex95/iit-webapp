import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EducationComponent } from "./education.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { CoursesComponent } from "./courses/courses.component";

const educationRoutes: Routes = [
    {
        path: "education",
        component: EducationComponent,
        children: [
            {
                path: "catalogue",
                component: CatalogueComponent
            },
            {
                path: "courses",
                component: CoursesComponent
            }
        ]
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
export class EducationRoutingModule { }
