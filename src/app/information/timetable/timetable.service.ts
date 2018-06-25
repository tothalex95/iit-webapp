import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { InformationModule } from "../information.module";
import { Observable } from "rxjs";
import { Timetable } from "./timetable";

const TIMETABLE_URL: string = "json/timetable.json";

@Injectable({
    providedIn: InformationModule
})
export class TimetableService {
    constructor(private http: HttpClient) {}

    getTimetable(): Observable<Timetable> {
        return this.http.get<Timetable>(TIMETABLE_URL);
    }
}