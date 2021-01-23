import { NgModule } from "@angular/core";
import {
  MdcButtonModule,
  MdcDialogModule,
  MdcCardModule,
  MdcTypographyModule,
  MdcDrawerModule,
  MdcIconModule,
  MdcAppBarModule,
  MdcListModule,
  MdcElevationModule,
} from "@angular-mdc/web";

@NgModule({
  exports: [
    MdcButtonModule,
    MdcDialogModule,
    MdcTypographyModule,
    MdcCardModule,
    MdcDrawerModule,
    MdcIconModule,
    MdcAppBarModule,
    MdcListModule,
    MdcElevationModule,
  ],
})
export class AppMaterialModule {}
