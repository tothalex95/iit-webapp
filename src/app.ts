import "zone.js/dist/zone"
import "hammerjs"
import "web-animations-js"

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
