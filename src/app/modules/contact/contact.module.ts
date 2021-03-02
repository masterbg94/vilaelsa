import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './pages/contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {ContactFormModule} from '../../shared/components/contact-form/contact-form.module';
import {ContainerModule} from '../../shared/components/container/container.module';
import {RibbonModel} from '../../shared/components/ribbon/ribbon.model';
import {MapModule} from '../../shared/components/google-map/map.module';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		ContactRoutingModule,
		HeaderModule,
		ContactFormModule,
		ContainerModule,
		RibbonModel,
		MapModule,
		TranslateModule
	],
	exports: [
		ContactComponent
	],
	declarations: [
		ContactComponent
	]
})

export class ContactModule {}
