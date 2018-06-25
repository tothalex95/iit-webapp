import { Component, OnInit } from "@angular/core";
import { Timetable } from "./timetable";
import { TimetableService } from "./timetable.service";

@Component({
    templateUrl: "./timetable.component.html"
})
export class TimetableComponent implements OnInit {
    timetable: Timetable;

    constructor(private timetableService: TimetableService) { }

    ngOnInit(): void {
        this.timetableService.getTimetable()
            .subscribe((timetable: Timetable) => {
                this.timetable = timetable;
            });
    }
}