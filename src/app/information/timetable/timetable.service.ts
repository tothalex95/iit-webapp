import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { InformationModule } from "../information.module";
import { TimetableEntry } from "./timetable-entry";

const TIMETABLE_URL: string = "json/timetable.json";

@Injectable({
    providedIn: InformationModule
})
export class TimetableService {
    constructor(private http: HttpClient) {}

    getTimetable(): Observable<Array<TimetableEntry>> {
        return this.http.get<Array<TimetableEntry>>(TIMETABLE_URL);
    }
}
