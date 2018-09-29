import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { String } from "typescript-string-operations";

import { EducationModule } from "../education.module";
import { CatalogueEntry } from "./catalogue-entry";

const CATALOGUE_URL_TEMPLATE: string = "json/{0}_{1}.json";

@Injectable({
    providedIn: EducationModule
})
export class CatalogueService {
    constructor(private http: HttpClient) { }

    getCatalogue(subjectId: string, year: number): Observable<Array<CatalogueEntry>> {
        let catalogueUrl: string = this.getCatalogueUrl(subjectId, year);
        return this.http.get<Array<CatalogueEntry>>(catalogueUrl);
    }

    private getCatalogueUrl(subjectId: string, year: number) {
        return String.Format(CATALOGUE_URL_TEMPLATE, subjectId, year);
    }
}
