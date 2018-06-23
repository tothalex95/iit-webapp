import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InformationComponent } from "./information.component";
import { InformationRoutingModule } from "./information-routing.module";

@NgModule({
    imports: [
        CommonModule,
        InformationRoutingModule
    ],
    declarations: [
        InformationComponent
    ]
})
export class InformationModule {
    constructor() {
        
    }
}