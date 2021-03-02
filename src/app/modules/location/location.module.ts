import {NgModule} from '@angular/core';
import {LocationComponent} from './pages/location.component';
import {LocationRoutingModule} from './location-routing.module';
import {CarouselModule} from 'ngx-bootstrap';
import {ContainerModule} from '../../shared/components/container/container.module';
import {RibbonModel} from '../../shared/components/ribbon/ribbon.model';
import {CommonModule} from '@angular/common';
import {ZlatiborMapModule} from '../../shared/components/zlatibor-map/zlatibor-map.module';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		LocationRoutingModule,
		CarouselModule.forRoot(),
		ContainerModule,
		RibbonModel,
		ZlatiborMapModule,
		TranslateModule
	],
	exports:
		[
			LocationComponent
		],

	declarations:
		[
			LocationComponent]

})

export class LocationModule {}
