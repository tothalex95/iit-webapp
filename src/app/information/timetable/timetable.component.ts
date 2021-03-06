import { Component, OnInit } from "@angular/core";

import { TimetableEntry } from "./timetable-entry";
import { TimetableService } from "./timetable.service";

@Component({
    templateUrl: "./timetable.component.html"
})
export class TimetableComponent implements OnInit {
    readonly displayedColumns: string[] = [
        "startHour",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday"
    ];

    timetable: Array<TimetableEntry>;

    constructor(private timetableService: TimetableService) { }

    ngOnInit(): void {
        this.timetableService.getTimetable()
            .subscribe((timetable: Array<TimetableEntry>) => {
                this.timetable = timetable;
            });
    }
}
