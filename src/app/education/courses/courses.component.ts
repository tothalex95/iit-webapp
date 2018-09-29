import { Component, OnInit } from "@angular/core";

import { Course } from "./course";
import { CoursesService } from "./courses.service";

@Component({
    templateUrl: "./courses.component.html"
})
export class CoursesComponent implements OnInit {
    courses: Array<Course>;

    constructor(private coursesService: CoursesService) { }
    
    ngOnInit(): void {
        this.coursesService.getCourses()
            .subscribe((courses: Array<Course>) => {
                this.courses = courses;
            });
    }
}
