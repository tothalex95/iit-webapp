import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

import { CatalogueEntry } from "./catalogue-entry";
import { CatalogueService } from "./catalogue.service";
import { Course } from "./course";
import { COURSES } from "./courses";

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
        "plusPoints"
    ];

    readonly courses: Course[] = COURSES;

    readonly pageSizeOptions: number[] = [10, 25, 50];

    neptunCode: string;

    catalogue: MatTableDataSource<CatalogueEntry>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    @ViewChild(MatSort) sort: MatSort;

    constructor(private catalogueService: CatalogueService) { }

    ngOnInit(): void {
        this.loadCatalogue(this.courses[0]);
    }

    loadCatalogue(course: Course): void {
        this.catalogueService.getCatalogue(course.subject, course.year)
            .subscribe((catalogue: Array<CatalogueEntry>) => {
                this.catalogue = new MatTableDataSource(catalogue);

                this.catalogue.filterPredicate = (catalogueEntry: CatalogueEntry, neptunCode: string) => catalogueEntry.neptunCode.startsWith(neptunCode);

                this.catalogue.paginator = this.paginator;

                this.catalogue.sort = this.sort;
            });
    }

    onNeptunCodeChange(): void {
        this.neptunCode = this.neptunCode.toUpperCase();

        this.filterCatalogueEntries();
    }

    private filterCatalogueEntries(): void {
        this.catalogue.filter = this.neptunCode;
    }
}
