import {Component, Input, OnInit} from '@angular/core';
import {BuildingModel} from '../../model/building.model';

@Component({
	selector:    'app-map',
	styleUrls:   ['./map.component.scss'],
	templateUrl: './map.component.html'
})

export class MapComponent implements OnInit
{
	@Input() Iscontact = false;
	@Input() IsHome = false;
	@Input() building = false;
	@Input() IsBuilding1 = false;
	@Input() IsBuilding2 = false;
	@Input() IsBuilding3 = false;
	@Input() lat: number;
	@Input() lng: number;
	text = '';
	city = '';
	address = '';



	@Input() activeBuilding: BuildingModel;

	@Input() markers: Marker[] = [
		{
			lat: 43.7301677,
			lng: 19.7024379,
			label:     '',
			draggable: true,
		},
		{
			lat:       43.732116,
			lng:       19.696933,
			label:     '',
			draggable: true
		},
		{
			lat:       44.8952055,
			lng:       20.2286693,
			label:     '',
			draggable: false
		},
		{
			lat:       43.7301677,
			lng:       19.7024379,
			label:     '',
			draggable: false
		},
		{
			lat: 43.721054,
			lng: 19.701710,
			label: '',
			draggable: false
		}
	];
	// google maps zoom level
	 zoom = 15;

	// initial center position for the map


	clickedMarker(label: string, index: number)
	{
		console.log(`clicked the marker: ${label || index}`);
	}

	markerDragEnd(m: Marker, $event: MouseEvent)
	{
		console.log('dragEnd', m, $event);
	}

	ngOnInit() {
		if (this.Iscontact) {
			this.lat = 44.8952055;
			this.lng = 20.2286693;
		} else if (this.IsHome ) {
			this.lat = 43.7301675;
			this.lng = 19.7024378;
		} if (this.IsBuilding1 && this.building) {
			this.lat = 43.7301677;
			this.lng = 19.7024379;
			this.text = 'Vila Elsa I';
			this.city = 'Zlatibor';
			this.address = 'Miladina Pećinara BB';
		}  if (this.IsBuilding2 && this.building) {
			this.lat = 43.732116;
			this.lng = 19.696933;
			this.text = 'Vila Elsa II';
			this.city = 'Zlatibor';
			this.address = 'Krfska BB';
		} if (this.IsBuilding3 && this.building) {
			this.lat = 43.721054;
			this.lng = 19.701710;
			this.text = 'Vila Elsa III';
			this.city = 'Zlatibor';
			this.address = 'Sportova';
		}
	}
}


// just an interface for type safety.
interface Marker
{
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

