import { Component, OnInit } from "@angular/core";
import { RatingsService } from "./ratings.service";
import { Rating } from "./rating";

@Component({
    templateUrl: "./ratings.component.html"
})
export class RatingsComponent implements OnInit {
    ratings: Array<Rating>;
    overall: Rating = new Rating();

    constructor(private ratingsService: RatingsService) { }

    ngOnInit(): void {
        this.ratingsService.getRatings()
            .subscribe((ratings: Array<Rating>) => {
                this.ratings = ratings;

                this.ratings.forEach((rating: Rating) => {
                    this.overall.raters += rating.raters;
                });

                this.ratings.forEach((rating: Rating) => {
                    this.overall.usefulness += rating.usefulness * rating.raters / this.overall.raters;
                    this.overall.feasibility += rating.feasibility * rating.raters / this.overall.raters;
                    this.overall.diction += rating.diction * rating.raters / this.overall.raters;
                    this.overall.preparedness += rating.preparedness * rating.raters / this.overall.raters;
                    this.overall.helpfulness += rating.helpfulness * rating.raters / this.overall.raters;
                });
            });
    }
}