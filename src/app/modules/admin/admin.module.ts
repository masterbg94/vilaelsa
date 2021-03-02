
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './pages/admin.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {AdminGuard} from '../../shared/guards/admin.guard';
import {PaginationModule} from 'ngx-bootstrap';
import {AlertModel} from '../../shared/components/alerts/alert.model';

@NgModule({
	imports:[
		CommonModule,
		AdminRoutingModule,
		CollapseModule.forRoot(),
		PaginationModule.forRoot(),
		AlertModel
	],
	declarations:[
		AdminComponent
	],
	providers: [
		AdminGuard
	]
})

export  class AdminModule {}
