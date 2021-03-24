import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PremisesComponent} from './pages/premises.component';

const ROUTES: Routes = [
	{
		path: '',
		component: PremisesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(ROUTES)],
	exports: [RouterModule]
})
export class PremisesRoutingModule {

}
