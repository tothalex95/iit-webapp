import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HtmlSanitizerPipe } from "./pipes/html-sanitizer.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HtmlSanitizerPipe
    ],
    declarations: [
        HtmlSanitizerPipe
    ]
})
export class PipesModule { }
