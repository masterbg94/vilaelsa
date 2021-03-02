import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {NgBoxModule} from 'ngbox/ngbox.module';
import {NgBoxService} from 'ngbox/ngbox.service';
import {ModelComponent} from './model.component';
import {RibbonModel} from '../ribbon/ribbon.model';
import {CarouselModule} from 'ngx-bootstrap';
import {RouterModule} from '@angular/router';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		NgBoxModule,
		RibbonModel,
		CarouselModule.forRoot(),
		RouterModule,
		TranslateModule
	],
	exports: [
		ModelComponent
	],
	declarations: [
		ModelComponent
	],
	providers: [
		NgBoxService
	]
})

export class ModelModule {}
