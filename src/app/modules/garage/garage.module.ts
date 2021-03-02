import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RibbonModel} from '../../shared/components/ribbon/ribbon.model';
import {GarageComponent} from './pages/garage.component';
import {GarageRoutingModule} from './garage-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {HeaderSubModule} from '../../shared/components/header-sub/header-sub.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {PaginationModule} from 'ngx-bootstrap';
import {NgBoxModule} from 'ngbox/ngbox.module';
import {NgBoxService} from 'ngbox/ngbox.service';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		RibbonModel,
		GarageRoutingModule,
		HeaderModule,
		HeaderSubModule,
		ContainerModule,
		PaginationModule.forRoot(),
		NgBoxModule,
		TranslateModule
	],
	exports: [
		GarageComponent
	],
	declarations: [
		GarageComponent
	],
	providers: [
		NgBoxService
	]
})

export class GarageModule {}
