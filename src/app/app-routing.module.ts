import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: 'app/modules/home/home.module#HomeModule',
	},
	{
		path: 'investitor',
		loadChildren: 'app/modules/investitor/investitor.module#InvestitorModule',
	},
	{
		path: 'building/:id',
		loadChildren: 'app/modules/building/building.module#BuildingModule',
	},
	{
		path: 'building/:id/apartment/:aid',
		loadChildren: 'app/modules/apartment-detail/apartment-detail.module#ApartmentDetailModule',
	},
	{
		path: 'building/:id/garages',
		loadChildren: 'app/modules/garage/garage.module#GarageModule',
	},
	{
		path: 'location',
		loadChildren: 'app/modules/location/location.module#LocationModule',
	},
	{
		path: 'contact',
		loadChildren: 'app/modules/contact/contact.module#ContactModule',
	},
	{
		path: 'login',
		loadChildren: 'app/modules/login/login.module#LoginModule'
	},
	{
		path: 'admin',
		loadChildren: 'app/modules/admin/admin.module#AdminModule'
	},
	{
		path: 'gallery',
		loadChildren: 'app/modules/gallery/gallery.module#GalleryModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
