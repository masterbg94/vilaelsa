import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector:    'app-zlatibor-map',
	styleUrls:   ['./zlatibor-map.component.scss'],
	templateUrl: './zlatibor-map.component.html'
})

export class ZlatiborMapComponent implements OnInit
{

	text = '';
	city = '';
	address = '';



	@Input() markers: Marker[] = [
		{
			lat: 43.6862898,
			lng: 19.6925161,
			label:     '',
			draggable: true,
		},
		{
			lat:       43.8483476,
			lng:       19.4506892,
			label:     '',
			draggable: true
		},
		{
			lat:       43.6883808,
			lng:       19.8692035,
			label:     '',
			draggable: false
		},
		{
			lat:       43.3409073,
			lng:       19.9711385,
			label:     '',
			draggable: false
		},
		{
			lat:       43.8197375,
			lng:       19.4288903,
			label:     '',
			draggable: false
		},
		{
			lat:       43.7927392,
			lng:       19.5057351,
			label:     '',
			draggable: false
		},
		{
			lat:       43.8617773,
			lng:       19.4814201,
			label:     '',
			draggable: false
		}
	];
	// google maps zoom level
			 zoom              = 10;

	// initial center position for the map
	@Input()
	lat: any =  43.8197375;

	@Input()
	lng: any = 19.4288903;


	clickedMarker(label: string, index: number)
	{
		console.log(`clicked the marker: ${label || index}`);
	}

	markerDragEnd(m: Marker, $event: MouseEvent)
	{
		console.log('dragEnd', m, $event);
	}

	ngOnInit() {

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

