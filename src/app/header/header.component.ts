import { Component, OnInit } from "@angular/core";

import { Option } from "../option.model";
import options from "../../assets/options.json";
import { StyleManagerService } from "../style-manager.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  options: Array<Option> = options;
  selectedTheme: Option;
  private readonly stylesBasePath = `node_modules/@angular/material/prebuilt-themes/`;

  constructor(private readonly styleManager: StyleManagerService) {}

  ngOnInit() {
    this.styleManager.setStyle(`${this.stylesBasePath}deeppurple-amber.css`);
  }

  themeChangeHandler(themeToSet: Option) {
    this.selectedTheme = themeToSet;
    console.log(themeToSet);
    this.styleManager.setStyle(`${this.stylesBasePath}${themeToSet.value}.css`);
  }
}
