import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule
    ],
    exports: [
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule
    ]
})
export class MaterialDesignModule { }
