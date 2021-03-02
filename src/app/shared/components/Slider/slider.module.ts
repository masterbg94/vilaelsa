import {NgModule} from '@angular/core';
import {SliderComponent} from './slider.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import {CommonModule} from '@angular/common';
import {TranslateModule} from 'ng2-translate';


@NgModule({
	imports: [
		CarouselModule,
		CommonModule,
		TranslateModule
	],
	exports: [
		SliderComponent
	],
	declarations: [
		SliderComponent
	]
})

export class SliderModule {}
