import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { EducationModule } from "../education.module";
import { Course } from "./course";

const COURSES_URL: string = "json/courses.json"

@Injectable({
    providedIn: EducationModule
})
export class CoursesService {
    constructor(private http: HttpClient) { }

    getCourses(): Observable<Array<Course>> {
        return this.http.get<Array<Course>>(COURSES_URL);
    }
}
