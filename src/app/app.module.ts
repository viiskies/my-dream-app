import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { TestService } from './test/test.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DogComponent } from './dog/dog.component';
import { DogService } from './dog/dog.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [TestService, DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
