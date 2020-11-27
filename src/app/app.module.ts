import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { UserInfoService } from './user-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
