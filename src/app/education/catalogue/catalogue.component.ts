import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { CatalogueEntry } from "./catalogue-entry";
import { CatalogueService } from "./catalogue.service";
import { Course } from "./course";
import { COURSES } from "./courses";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { DetailDialogComponent } from "./detail-dialog/detail-dialog.component";

@Component({
    templateUrl: "./catalogue.component.html"
})
export class CatalogueComponent implements OnInit {
    readonly displayedColumns: string[] = [
        "index",
        "neptunCode",
        "presence",
        "homeworks",
        "practice",
        "plusPoints",
        "details"
    ];

    readonly courses: Course[] = COURSES;

    readonly pageSizeOptions: number[] = [10, 25, 50];

    filterSettings = {
        neptunCode: "",
        presence: 2,
        homeworks: 2,
        practice: 2
    };

    catalogue: MatTableDataSource<CatalogueEntry>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    constructor(private catalogueService: CatalogueService, private dialog: MatDialog) { }

    ngOnInit(): void {
        this.loadCatalogue(this.courses[0]);
    }

    loadCatalogue(course: Course): void {
        this.catalogueService.getCatalogue(course.subject, course.year)
            .subscribe((catalogue: Array<CatalogueEntry>) => {
                this.catalogue = new MatTableDataSource(catalogue);

                this.catalogue.filterPredicate = (catalogueEntry: CatalogueEntry, neptunCode: string) => this.filter(catalogueEntry);

                this.catalogue.paginator = this.paginator;

                this.catalogue.sort = this.sort;

                this.resetFilter();
            });
    }

    openDetailDialog(entry: CatalogueEntry): void {
        const dialogConfig: MatDialogConfig = new MatDialogConfig();

        dialogConfig.minWidth = 300;
        dialogConfig.data = entry;

        this.dialog.open(DetailDialogComponent, dialogConfig);
    }

    onChange(): void {
        this.filterSettings.neptunCode = this.filterSettings.neptunCode.toUpperCase();

        this.catalogue.filter = "*";
    }

    resetFilter(): void {
        this.filterSettings = {
            neptunCode: "",
            presence: 2,
            homeworks: 2,
            practice: 2
        };

        this.catalogue.filter = "*";
    }

    getPresenceResult(catalogueEntry: CatalogueEntry): number {
        if (catalogueEntry.fulfilled) {
            return 1;
        }
        if (catalogueEntry.hw2 == 2) {
            return 2;
        }
        return catalogueEntry.presence >= catalogueEntry.max * 0.7 ? 1 : 0;
    }

    getHomeworksResult(catalogueEntry: CatalogueEntry): number {
        return catalogueEntry.fulfilled ? 1 : catalogueEntry.hw1 && catalogueEntry.hw2;
    }

    getPracticeResult(catalogueEntry: CatalogueEntry): number {
        return catalogueEntry.fulfilled ? 1 : this.getPresenceResult(catalogueEntry) && this.getHomeworksResult(catalogueEntry);
    }

    private filter(catalogueEntry: CatalogueEntry): boolean {
        let result: boolean = catalogueEntry.neptunCode.startsWith(this.filterSettings.neptunCode);

        if (this.filterSettings.presence != 2) {
            result = result && this.filterSettings.presence == this.getPresenceResult(catalogueEntry);
        }

        if (this.filterSettings.homeworks != 2) {
            result = result && this.filterSettings.homeworks == this.getHomeworksResult(catalogueEntry);
        }

        if (this.filterSettings.practice != 2) {
            result = result && this.filterSettings.practice == this.getPracticeResult(catalogueEntry);
        }

        return result;
    }
}
