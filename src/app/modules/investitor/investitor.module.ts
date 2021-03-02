import {NgModule} from '@angular/core';

import {InvestitorComponent} from './pages/investitor.component';
import {InvestitorRoutingModule} from './investitor-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {RibbonModel} from '../../shared/components/ribbon/ribbon.model';
import {MapModule} from '../../shared/components/google-map/map.module';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		InvestitorRoutingModule,
		HeaderModule,
		ContainerModule,
		RibbonModel,
		MapModule,
		TranslateModule
	],
	declarations: [
		InvestitorComponent
	]
})

export class InvestitorModule {}
