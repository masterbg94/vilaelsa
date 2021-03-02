import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NavMenuModule} from './shared/components/nav-menu/nav-menu.module';
import {FooterModule} from './shared/components/footer/footer.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Http} from '@angular/http';
import {TranslateLoader, TranslateModule, TranslateService, TranslateStaticLoader} from 'ng2-translate';

export function createTranslateLoader(http: Http) {
	return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	AppRoutingModule,
	HttpClientModule,
	BrowserModule,
	BrowserAnimationsModule,
	NavMenuModule,
	FooterModule,
	TranslateModule.forRoot({
		  provide: TranslateLoader,
		  useFactory: (createTranslateLoader),
		  deps: [Http]
	  })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
