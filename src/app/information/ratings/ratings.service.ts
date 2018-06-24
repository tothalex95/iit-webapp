import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { InformationModule } from "../information.module";
import { Observable } from "rxjs";
import { Rating } from "./rating";

const RATINGS_URL: string = "json/ratings.json";

@Injectable({
    providedIn: InformationModule
})
export class RatingsService {
    constructor(private http: HttpClient) {
        
    }

    getRatings(): Observable<Rating[]> {
        return this.http.get<Rating[]>(RATINGS_URL);
    }
}