import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { CatalogueEntry } from "../catalogue-entry";

@Component({
    templateUrl: "detail-dialog.component.html"
})
export class DetailDialogComponent {
    readonly displayedColumns: string[] = [
        "key",
        "value"
    ];

    homeworks: Array<Object> = [];

    constructor(@Inject(MAT_DIALOG_DATA) public data: CatalogueEntry) {
        this.homeworks.push({
            title: "Homework I.",
            result: data.hw1
        }, {
            title: "Homework II.",
            result: data.hw2
        });
    }
}
