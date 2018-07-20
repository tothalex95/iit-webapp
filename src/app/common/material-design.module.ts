import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule
    ],
    exports: [
        MatTableModule
    ]
})
export class MaterialDesignModule { }
