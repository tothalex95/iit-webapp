import { Component } from "@angular/core";

@Component({
    templateUrl: "./information.component.html"
})
export class InformationComponent {
    readonly links = [
        {
            path: "contact",
            label: "Contact"
        },
        {
            path: "timetable",
            label: "Timetable"
        },
        {
            path: "ratings",
            label: "Ratings"
        }
    ];
}
