import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HomeModule } from "./home.module";
import { Information } from "./information";
import { Quote } from "./quote";

const EDUCATION_INFO_URL: string = "json/education_info.json";
const EXPERIENCE_INFO_URL: string = "json/experience_info.json";
const RANDOM_QUOTE_URL: string = "json/quotes.json";

@Injectable({
    providedIn: HomeModule
})
export class HomeService {
    constructor(private http: HttpClient) { }

    getEducationInformation(): Observable<Array<Information>> {
        return this.http.get<Array<Information>>(EDUCATION_INFO_URL);
    }

    getExperienceInformation(): Observable<Array<Information>> {
        return this.http.get<Array<Information>>(EXPERIENCE_INFO_URL);
    }

    getRandomQuote(): Observable<Array<Quote>> {
        return this.http.get<Array<Quote>>(RANDOM_QUOTE_URL);
    }
}
