import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { CdkTableModule } from "@angular/cdk/table";
import { PortalModule } from "@angular/cdk/portal";
import { OverlayModule } from "@angular/cdk/overlay";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CdkTableModule,
    OverlayModule,
    PortalModule
  ],
  declarations: [AppComponent, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
