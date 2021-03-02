import {NgModule} from '@angular/core';
import {GalleryComponent} from './pages/gallery.component';
import {GalleryRoutingModule} from './gallery-routing.module';
import {HeaderModule} from '../../shared/components/header/header.module';
import {CommonModule} from '@angular/common';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';

@NgModule({
	imports: [
		GalleryRoutingModule,
		HeaderModule,
		CommonModule,
		Angular2ImageGalleryModule
	],
	exports: [GalleryComponent],
	declarations: [GalleryComponent]
})
export class GalleryModule {
}
