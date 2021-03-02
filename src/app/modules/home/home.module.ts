import {NgModule, OnInit} from '@angular/core';
import {HomeComponent} from './pages/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {SliderModule} from '../../shared/components/Slider/slider.module';
import {RibbonModel} from '../../shared/components/ribbon/ribbon.model';
import {ContainerModule} from '../../shared/components/container/container.module';
import {ApartmansRandomModule} from '../../shared/components/apartmans-random/apartmans-random.module';
import {LocationModule} from '../../shared/components/location/location.module';
import {MapModule} from '../../shared/components/google-map/map.module';
import {DesignModule} from '../../shared/components/design/design.module';
import {PaginationModule} from 'ngx-bootstrap';
import {FilterModule} from '../../shared/components/filter/filter.module';
import {CommonModule} from '@angular/common';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		PaginationModule.forRoot(),
		FilterModule,
		SliderModule,
		RibbonModel,
		ContainerModule,
		ApartmansRandomModule,
		LocationModule,
		MapModule,
		DesignModule,
		TranslateModule
	],
	declarations: [
		HomeComponent
	]
})

export class HomeModule{
}
