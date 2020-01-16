import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestAnimationComponent } from "./test-animation/test-animation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FlipModule } from "ngx-flip";
import { CustomHelperComponent } from "./custom-helper/custom-helper.component";
import { EnvelopeTextPipe } from "./Utils/envelopeTextPipe";

@NgModule({
  declarations: [
    AppComponent,
    TestAnimationComponent,
    CustomHelperComponent,
    EnvelopeTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FlipModule
  ],
  providers: [EnvelopeTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
