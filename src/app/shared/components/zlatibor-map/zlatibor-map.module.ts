import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ZlatiborMapComponent} from './zlatibor-map.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
@NgModule({
	imports: [
		CommonModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyB6uWNMdt_uVwK5ge7wwEq5DirUraheGdU'
		}),
	],
	exports: [
		ZlatiborMapComponent
	],
	declarations: [
		ZlatiborMapComponent
	]
})
export class ZlatiborMapModule {}
