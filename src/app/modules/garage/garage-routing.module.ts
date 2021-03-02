import {GarageComponent} from './pages/garage.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
	{
		path: '',
		component: GarageComponent
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GarageRoutingModule {}
