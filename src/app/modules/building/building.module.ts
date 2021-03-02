import {BuildingComponent} from './page/building.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BuildingRoutingModule} from './building-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import { HeaderSubModule} from '../../shared/components/header-sub/header-sub.module';
import {ApartmansRandomModule} from '../../shared/components/apartmans-random/apartmans-random.module';
import {FilterModule} from '../../shared/components/filter/filter.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {PaginationModule} from 'ngx-bootstrap';
import {MapModule} from '../../shared/components/google-map/map.module';
import {TranslateModule} from 'ng2-translate';


@NgModule ({
	imports: [
		CommonModule,
		BuildingRoutingModule,
		HeaderModule,
		HeaderSubModule,
		ApartmansRandomModule,
		FilterModule,
		ContainerModule,
		PaginationModule.forRoot(),
		MapModule,
		TranslateModule
	],
	exports: [
		BuildingComponent
	],

	declarations: [
		BuildingComponent
	]
})

export class BuildingModule {}
