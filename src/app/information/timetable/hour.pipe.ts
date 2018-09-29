import { Pipe, PipeTransform } from "@angular/core";
import { String } from "typescript-string-operations";

const ONE_DIGIT_HOURS_TEMPLATE: string = "0{0}:00-0{1}:00";
const MIXED_DIGIT_HOUR_TEMPLATE: string = "0{0}:00-{1}:00";
const TWO_DIGIT_HOURS_TEMPLATE: string = "{0}:00-{1}:00";

@Pipe({
    name: "hour"
})
export class HourPipe implements PipeTransform {
    transform(value: number): string {
        if (value < 1 || value > 23) {
            return "00:00-01:00";
        }

        let startHour: number = value, endHour: number = value + 1;

        if (endHour < 10) {
            return String.Format(ONE_DIGIT_HOURS_TEMPLATE, startHour, endHour);
        }
        if (startHour > 9) {
            return String.Format(TWO_DIGIT_HOURS_TEMPLATE, startHour, endHour);
        }
        return String.Format(MIXED_DIGIT_HOUR_TEMPLATE, startHour, endHour);
    }
}
