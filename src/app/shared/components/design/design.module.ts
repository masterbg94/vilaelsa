import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DesignComponent} from './design.component';

import {CarouselModule} from 'ngx-bootstrap/carousel';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports:[
		CommonModule,
		CarouselModule,
		TranslateModule

	],
	exports: [
		DesignComponent
	],
	declarations: [
		DesignComponent
	]
})

export class DesignModule {}
