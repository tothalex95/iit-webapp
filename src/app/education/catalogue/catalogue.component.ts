import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

import { Catalogue } from "./catalogue";
import { CatalogueEntry } from "./catalogue-entry";
import { CatalogueService } from "./catalogue.service";
import { Course } from "./course";
import { COURSES } from "./courses";

@Component({
    templateUrl: "./catalogue.component.html"
})
export class CatalogueComponent implements OnInit {
    readonly displayedColumns: string[] = [
        "neptunCode",
        "presence",
        "homeworks",
        "practice",
        "plusPoints"
    ];

    catalogue: MatTableDataSource<CatalogueEntry>;

    readonly courses: Course[] = COURSES;

    constructor(private catalogueService: CatalogueService) { }

    ngOnInit(): void {
        this.loadCatalogue(this.courses[0]);
    }

    loadCatalogue(course: Course): void {
        this.catalogueService.getCatalogue(course.subject, course.year)
            .subscribe((catalogue: Catalogue) => {
                this.catalogue = new MatTableDataSource(catalogue.catalogueEntries);
            });
    }
}
