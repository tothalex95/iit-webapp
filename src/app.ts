import "zone.js/dist/zone"
import "hammerjs"
import "web-animations-js"

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
