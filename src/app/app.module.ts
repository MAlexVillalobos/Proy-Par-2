import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ACaratulaPage } from '../pages/a-caratula/a-caratula';
import { ANombrePage } from '../pages/a-nombre/a-nombre';
import { ATituloPage } from '../pages/a-titulo/a-titulo';
import { AValoracionPage } from '../pages/a-valoracion/a-valoracion';
import { BCaratulaPage } from '../pages/b-caratula/b-caratula';
import { BNombrePage } from '../pages/b-nombre/b-nombre';
import { BTituloPage } from '../pages/b-titulo/b-titulo';
import { BValoracionPage } from '../pages/b-valoracion/b-valoracion';
import { CCaratulaPage } from '../pages/c-caratula/c-caratula';
import { CNombrePage } from '../pages/c-nombre/c-nombre';
import { CTituloPage } from '../pages/c-titulo/c-titulo';
import { CValoracionPage } from '../pages/c-valoracion/c-valoracion';
import { DCaratulaPage } from '../pages/d-caratula/d-caratula';
import { DNombrePage } from '../pages/d-nombre/d-nombre';
import { DTituloPage } from '../pages/d-titulo/d-titulo';
import { DValoracionPage } from '../pages/d-valoracion/d-valoracion';
import { ECaratulaPage } from '../pages/e-caratula/e-caratula';
import { ENombrePage } from '../pages/e-nombre/e-nombre';
import { ETituloPage } from '../pages/e-titulo/e-titulo';
import { EValoracionPage } from '../pages/e-valoracion/e-valoracion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ACaratulaPage,
    ANombrePage,
    ATituloPage,
    AValoracionPage,
    BCaratulaPage,
    BNombrePage,
    BTituloPage,
    BValoracionPage,
    CCaratulaPage,
    CNombrePage,
    CTituloPage,
    CValoracionPage,
    DCaratulaPage,
    DNombrePage,
    DTituloPage,
    DValoracionPage,
    ECaratulaPage,
    ENombrePage,
    ETituloPage,
    EValoracionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ACaratulaPage,
    ANombrePage,
    ATituloPage,
    AValoracionPage,
    BCaratulaPage,
    BNombrePage,
    BTituloPage,
    BValoracionPage,
    CCaratulaPage,
    CNombrePage,
    CTituloPage,
    CValoracionPage,
    DCaratulaPage,
    CNombrePage,
    CTituloPage,
    CValoracionPage,
    DCaratulaPage,
    DNombrePage,
    DTituloPage,
    DValoracionPage,
    ECaratulaPage,
    ENombrePage,
    ETituloPage,
    EValoracionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

