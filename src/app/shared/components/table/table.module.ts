import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-bootstrap';
import {TableComponent} from './table.component';
import {NgBoxModule} from 'ngbox/ngbox.module';
import {NgBoxService} from 'ngbox/ngbox.service';
import {TranslateModule} from 'ng2-translate';

@NgModule({
	imports: [
		CommonModule,
		CarouselModule.forRoot(),
		NgBoxModule,
		TranslateModule
	],
	exports: [
		TableComponent
	],
	declarations: [
		TableComponent
	],
	providers: [
		NgBoxService
	]
})

export class TableModule {}
