import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {InvestitorComponent} from './pages/investitor.component';



const routes: Routes = [
	{
		path: '',
		component: InvestitorComponent
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InvestitorRoutingModule {}
