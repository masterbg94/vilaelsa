import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ApartmansRandomComponent} from './apartmans-random.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {RouterModule} from '@angular/router';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		CarouselModule,
		RouterModule,
		TranslateModule

	],
	exports: [
		ApartmansRandomComponent
	],
	declarations: [
		ApartmansRandomComponent
	]
})

export class ApartmansRandomModule {}
