import { Component } from "@angular/core";

@Component({
    templateUrl: "./education.component.html"
})
export class EducationComponent {
    readonly links = [
        {
            path: "catalogue",
            label: "Catalogue"
        },
        {
            path: "courses",
            label: "Courses"
        }
    ];
}
