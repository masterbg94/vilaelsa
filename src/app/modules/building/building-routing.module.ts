import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BuildingComponent} from './page/building.component';

const routes: Routes = [
	{
		path: '',
		component: BuildingComponent
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class BuildingRoutingModule {}
