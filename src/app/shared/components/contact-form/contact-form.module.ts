import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


import {ContactFormComponent} from './contact-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertModel} from '../alerts/alert.model';
import {TranslateModule} from 'ng2-translate';







@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NgbModule.forRoot(),
		AlertModel,
		TranslateModule
	],
	exports: [
		ContactFormComponent
	],
	declarations: [
		ContactFormComponent
	]
})
export class ContactFormModule {}
