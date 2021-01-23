import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// index page
import { IndexPage } from "./pages/index-page/index-page.component";
// import { CairoPage } from "./pages/cairo/cairo.component";

export const routes: Routes = [
    {
    path: "home",
    component: IndexPage,
  }
  // {
  //   path: "cairo",
  //   component: CairoPage,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
