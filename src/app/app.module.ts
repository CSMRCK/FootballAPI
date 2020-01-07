import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CompetitionListComponent} from './components/competition-list/competition-list.component';
import {CompetitionItemComponent} from './components/competition-item/competition-item.component';



@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    CompetitionItemComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
