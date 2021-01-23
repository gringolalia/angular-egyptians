import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { RouterModule, Routes } from '@angular/router';

// main app component files
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

// component files
import { IndexPage } from "./pages/index-page/index-page.component";
import {MdcGridListModule} from '@angular-mdc/web/grid-list';
import { MdcCardModule } from '@angular-mdc/web';
import { MdcButtonModule } from '@angular-mdc/web';
// import { FlexLayoutModule } from '@angular/flex-layout';
// material components
import { AppMaterialModule } from "./material.module";
import { NightVisitorsComponent } from './pages/night-visitors/night-visitors.component';
import { NajibMahfouzComponent } from './pages/najib-mahfouz/najib-mahfouz.component';
import { MuhammadComponent } from './pages/muhammad/muhammad.component';
import { HamidComponent } from './pages/hamid/hamid.component';
import { PyramidsComponent } from './pages/pyramids/pyramids.component';
import { DromedariesComponent } from './pages/dromedaries/dromedaries.component';
import { SindbadComponent } from './sindbad/sindbad.component';
import { ShahrazadComponent } from './shahrazad/shahrazad.component';
import { ShahriyarComponent } from './shahriyar/shahriyar.component';
import { HarunComponent } from './harun/harun.component';
import { AliBabaComponent } from './ali-baba/ali-baba.component';
import { AbuNuwasComponent } from './abu-nuwas/abu-nuwas.component';
import { BarberOfBaghdadComponent } from './barber-of-baghdad/barber-of-baghdad.component';
import { AlMustansirComponent } from './al-mustansir/al-mustansir.component';
import { AhmedCairenseComponent } from './ahmed-cairense/ahmed-cairense.component'

const appRoutes: Routes = [
  {
    path: '',
    component: AbuNuwasComponent,
    data: { title: 'Egyptian Transcription' }
  },
  {
    path: 'home',
    component: AhmedCairenseComponent,
    data: { title: 'Egyptian Transcription' }
  },
  {
    path: 'al-mustansir',
    component: AlMustansirComponent,
    data: { title: 'Egyptian Matter' }
  },
  {
    path: 'barber-of-baghdad',
    component: BarberOfBaghdadComponent,
    data: { title: 'Like Sweeney Todd' }
  },
  {
    path: 'ali-baba',
    component: AliBabaComponent,
    data: { title: 'Forty-Seven Thieves' }
  },
  {
    path: 'harun-al-rashid',
    component: HarunComponent,
    data: { title: 'The Grand Caliph' }
  },
  {
    path: 'shahriyar',
    component: ShahriyarComponent,
    data: { title: 'The Maddened Monarch' }
  },
  {
    path: 'shahrazad',
    component: ShahrazadComponent,
    data: { title: 'Her Permitted Say' }
  },
  {
    path: 'sindbad',
    component: SindbadComponent,
    data: { title: 'Come Sail Away' }
  },
  // {
  //   path: 'dromedaries',
  //   component: DromedariesComponent,
  //   data: { title: 'The Grand Caliph' }
  // },
  // {
  //   path: 'pyramids',
  //   component: PyramidsComponent,
  //   data: { title: 'Monumental' }
  // },
  // {
  //   path: 'hamid',
  //   component: HamidComponent,
  //   data: { title: 'Domo Arigato' }
  // },
  //
  {
    path: 'muhammad',
    component: MuhammadComponent,
    data: { title: 'al-Bayan' }
  },
  {
    path: 'night-visitors',
    component: NightVisitorsComponent,
    data: { title: 'The Grand Caliph' }
  }
];


@NgModule({
  declarations: [AppComponent, IndexPage, NightVisitorsComponent, MuhammadComponent, DromedariesComponent, HamidComponent, NajibMahfouzComponent, PyramidsComponent, SindbadComponent, ShahrazadComponent, ShahriyarComponent, HarunComponent, AliBabaComponent, AbuNuwasComponent, BarberOfBaghdadComponent, AlMustansirComponent, AhmedCairenseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    MdcCardModule,
    MdcButtonModule,
    // FlexLayoutModule,
    MdcGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
