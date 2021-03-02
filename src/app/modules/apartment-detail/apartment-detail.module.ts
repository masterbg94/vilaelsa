import {NgModule} from '@angular/core';
import {ApartmentDetailComponent} from './page/apartment-detail.component';
import {ApartmentDetailRoutingModule} from './apartment-detail-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {HeaderSubModule} from '../../shared/components/header-sub/header-sub.module';
import {CommonModule} from '@angular/common';
import {RibbonModel} from '../../shared/components/ribbon/ribbon.model';
import {TableModule} from '../../shared/components/table/table.module';
import {ModelModule} from '../../shared/components/3dmodel/model.module';
import {AlertModel} from '../../shared/components/alerts/alert.model';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		HeaderModule,
		HeaderSubModule,
		ContainerModule,
		CommonModule,
		RibbonModel,
		TableModule,
		ModelModule,
		AlertModel,
		TranslateModule
	],
	exports: [
		ApartmentDetailComponent,
		ApartmentDetailRoutingModule
	],
	declarations: [
		ApartmentDetailComponent
	],
})

export class ApartmentDetailModule {}
