import { Component } from "@angular/core";

@Component({
    selector: "iit-app",
    templateUrl: "app.component.html",
    styleUrls: [
        "app.component.css"
    ]
})
export class AppComponent {
    readonly menu = [
        {
            icon: "home",
            label: "Home",
            path: "home"
        },
        {
            icon: "info",
            label: "Information",
            submenu: [
                {
                    icon: "contacts",
                    label: "Contact",
                    path: "information/contact"
                },
                {
                    icon: "access_time",
                    label: "Timetable",
                    path: "information/timetable"
                },
                {
                    icon: "star_rate",
                    label: "Ratings",
                    path: "information/ratings"
                }
            ]
        },
        {
            icon: "school",
            label: "Education",
            submenu: [
                {
                    icon: "book",
                    label: "Catalogue",
                    path: "education/catalogue"
                },
                {
                    icon: "table_chart",
                    label: "Courses",
                    path: "education/courses"
                }
            ]
        }
    ];
}
