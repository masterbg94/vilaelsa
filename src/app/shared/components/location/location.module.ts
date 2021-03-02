import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { LocationComponent} from './location.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports:[
		CommonModule,
		RouterModule,
		TranslateModule
	],
	exports: [
		LocationComponent
	],
	declarations: [
		LocationComponent
	]
})

export class LocationModule {}
