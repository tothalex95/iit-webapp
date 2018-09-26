import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatTableModule } from "@angular/material/table";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSortModule } from "@angular/material/sort";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatIconModule } from "@angular/material/icon";
import { MatLineModule } from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatExpansionModule,
        MatSortModule,
        MatButtonToggleModule,
        MatIconModule,
        MatLineModule,
        MatDialogModule,
        MatTooltipModule,
        MatGridListModule
    ],
    exports: [
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatInputModule,
        MatPaginatorModule,
        MatCardModule,
        MatButtonModule,
        MatTabsModule,
        MatExpansionModule,
        MatSortModule,
        MatButtonToggleModule,
        MatIconModule,
        MatLineModule,
        MatDialogModule,
        MatTooltipModule,
        MatGridListModule
    ]
})
export class MaterialDesignModule { }
