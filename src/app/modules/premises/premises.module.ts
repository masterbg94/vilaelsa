import {NgModule} from '@angular/core';

import {PremisesRoutingModule} from './premises-routing.module';
import {PremisesComponent} from './pages/premises.component';
import {HeaderModule} from '../../shared/components/header/header.module';
import {TranslateModule} from 'ng2-translate';
import {ApartmentService} from '../../shared/services/apartment.service';
import {CommonModule} from '@angular/common';
import {NgBoxModule} from 'ngbox/ngbox.module';
import {NgBoxService} from 'ngbox/ngbox.service';

@NgModule({
	imports: [PremisesRoutingModule, HeaderModule, TranslateModule, CommonModule, NgBoxModule],
	declarations: [PremisesComponent],
	providers: [ApartmentService, NgBoxService]
})
export class PremisesModule {

}
