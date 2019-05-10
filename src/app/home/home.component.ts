import { Component, OnInit } from "@angular/core";

import { HomeService } from "./home.service";
import { Information } from "./information";
import { Quote } from "./quote";

@Component({
    templateUrl: "./home.component.html",
    styleUrls: [
        "home.component.css"
    ]
})
export class HomeComponent implements OnInit {
    readonly displayedColumns: string[] = [
        "what",
        "where",
        "fromto"
    ];

    educationInfo: Array<Information>;

    experienceInfo: Array<Information>;

    quote: Quote;

    constructor(private homeService: HomeService) { }

    ngOnInit(): void {
        this.homeService.getEducationInformation()
            .subscribe((educationInfo: Array<Information>) => {
                this.educationInfo = educationInfo;
            });

        this.homeService.getExperienceInformation()
            .subscribe((experienceInfo: Array<Information>) => {
                this.experienceInfo = experienceInfo;
            });

        this.newQuote();
    }

    formatDate(date: string): string {
        return date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present";
    }

    newQuote(): void {
        this.homeService.getRandomQuote().subscribe((quotes: Array<Quote>) => {
            this.quote = quotes[Math.trunc(Math.random() * quotes.length)];
        });
    }
}
