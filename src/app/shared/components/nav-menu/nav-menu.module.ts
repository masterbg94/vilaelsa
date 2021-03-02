import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../../../app-routing.module';
import {CollapseModule} from 'ngx-bootstrap';
import {NavMenuComponent} from './nav-menu.component';
import {TranslateModule} from 'ng2-translate';
import {FormsModule} from '@angular/forms';



@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AppRoutingModule,
		CollapseModule,
		NgbModule.forRoot(),
		TranslateModule
	],
	exports: [
		NavMenuComponent
	],
	declarations: [
		NavMenuComponent
	]
})
export class NavMenuModule {}
