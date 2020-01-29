import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from  '@angular/material';
import { SizeDetectorComponent } from './size-detector/size-detector.component';
import { ResizeService } from './size-detector/resize.service';
import { AddMemberComponent } from './add-member/add-member.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';
import { ViewMemberComponent } from './view-member/view-member.component'
import { MemberDetailService } from './member-detail.service';
import { MemberDetailsComponent } from './member-details/member-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    SizeDetectorComponent,
    AddMemberComponent,
    ViewMemberComponent,
    MemberDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(BackendService)
  ],
  providers: [ResizeService,MemberDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
