import { Injectable } from "@angular/core";
import { EducationModule } from "../education.module";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Catalogue } from "./catalogue";
import { String } from "typescript-string-operations";

const CATALOGUE_URL_TEMPLATE: string = "json/{0}_{1}.json";

@Injectable({
    providedIn: EducationModule
})
export class CatalogueService {
    constructor(private http: HttpClient) { }

    getCatalogue(subjectId: string, year: number): Observable<Catalogue> {
        var catalogueUrl: string = this.getCatalogueUrl(subjectId, year);
        return this.http.get<Catalogue>(catalogueUrl);
    }

    private getCatalogueUrl(subjectId: string, year: number) {
        return String.Format(CATALOGUE_URL_TEMPLATE, subjectId, year);
    }
}