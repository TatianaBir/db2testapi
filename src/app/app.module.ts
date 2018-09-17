import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContentComponent } from './components/main-page/content/content.component';
import { TabsComponent } from './components/main-page/tabs/tabs.component';
import { APIService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SearchPipe } from './components/main-page/content/search.pipe';
import { ItemInfoComponent } from './components/main-page/content/item-info/item-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContentComponent,
    TabsComponent,
    SearchPipe,
    ItemInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
