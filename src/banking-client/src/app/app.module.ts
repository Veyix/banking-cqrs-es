import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankingModule } from './banking/banking.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // App
    AppRoutingModule,
    BankingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
