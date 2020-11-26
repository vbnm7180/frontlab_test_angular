import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';
import { PopupComponent } from './popup/popup.component';
import { UserInfoService } from './user-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
