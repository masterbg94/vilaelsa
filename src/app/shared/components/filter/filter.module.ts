import {NgModule} from '@angular/core';
import {FilterComponent} from './filter.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		NgbModule.forRoot(),
		TranslateModule
	],
	exports: [
		FilterComponent
	],
	declarations: [
		FilterComponent
	]
})
export class FilterModule {}
