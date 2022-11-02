import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppMaterialModule } from "./app-material.module";
import { HeaderComponent } from "./header/header.component";
import { HelloComponent } from "./hello.component";
import { MenuComponent } from "./menu/menu.component";
import { StyleManagerService } from "./style-manager.service";

@NgModule({
  imports: [
    AppMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [AppComponent, HelloComponent, HeaderComponent, MenuComponent],
  bootstrap: [AppComponent],
  providers: [StyleManagerService]
})
export class AppModule {}
