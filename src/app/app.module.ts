import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HandleHeaderInterceptor } from './Interceptors/handle-header.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Shared/Footer/Footer.component';
import { DashboardModule } from './Modules/dashboard/dashboard.module';
import { AuthenticationModule } from './Modules/authentication/authentication.module';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DashboardModule,
    AuthenticationModule,
    BrowserAnimationsModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: HandleHeaderInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
