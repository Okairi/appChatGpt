import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpGptInterceptor } from './shared/interceptor/http-gpt.interceptor';
import { FormsModule } from '@angular/forms';
import { SpinerComponent } from './shared/spiner/spiner.component';
import { ErrorComponent } from './shared/error/error.component';

@NgModule({
  declarations: [AppComponent, SpinerComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpGptInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
