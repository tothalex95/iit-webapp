import { Component, OnInit } from "@angular/core";
import { Catalogue } from "./catalogue";
import { CatalogueService } from "./catalogue.service";

@Component({
    templateUrl: "./catalogue.component.html"
})
export class CatalogueComponent implements OnInit {
    catalogue: Catalogue;

    constructor(private catalogueService: CatalogueService) { }

    ngOnInit(): void {
        this.catalogueService.getCatalogue("os", 2018)
            .subscribe((catalogue: Catalogue) => {
                this.catalogue = catalogue;
            });
    }
}