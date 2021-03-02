import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ApartmentDetailComponent} from './page/apartment-detail.component';


const routes: Routes = [
	{
		path: '',
		component: ApartmentDetailComponent
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ApartmentDetailRoutingModule {}
