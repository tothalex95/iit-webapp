import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { EducationModule } from "../education.module";
import { Course } from "./course";

const COURSES_URL: string = "json/courses.json"

@Injectable({
    providedIn: EducationModule
})
export class CoursesService {
    constructor(private http: HttpClient) { }

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>(COURSES_URL);
    }
}
