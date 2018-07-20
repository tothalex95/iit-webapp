import { Component, OnInit } from "@angular/core";
import { Catalogue } from "./catalogue";
import { CatalogueService } from "./catalogue.service";
import { MatTableDataSource } from "@angular/material/table";
import { CatalogueEntry } from "./catalogue-entry";

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

    constructor(private catalogueService: CatalogueService) { }

    ngOnInit(): void {
        this.catalogueService.getCatalogue("os", 2018)
            .subscribe((catalogue: Catalogue) => {
                this.catalogue = new MatTableDataSource(catalogue.catalogueEntries);
            });
    }
}
