import { Component } from "@angular/core";

@Component({
    templateUrl: "./contact.component.html"
})
export class ContactComponent {
    readonly displayedColumns: string[] = [
        "type",
        "value"
    ];

    readonly contacts: Array<Object> = [
        {
            type: "Phone",
            value: `+36-**-***-****`
        },
        {
            type: "Email",
            value: `
            <a href="mailto:alex.toth@iit.uni-miskolc.hu">
                alex.toth@iit.uni-miskolc.hu
            </a>
            `
        }
    ];
}
