import {NgModule} from '@angular/core';
import {FooterComponent} from './footer.component';
import {CommonModule} from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {TranslateModule} from 'ng2-translate';


@NgModule({
	imports: [
		CommonModule,
		NgbModule.forRoot(),
		RouterModule,
		TranslateModule
	],
	exports: [
		FooterComponent
	],
	declarations: [
		FooterComponent
	]
})

export class FooterModule {}
