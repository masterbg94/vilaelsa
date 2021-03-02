import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	templateUrl: './location.component.html',
	styleUrls: ['./location.component.scss']
})

export class LocationComponent {

	images = [
		{name: 'zlatibor1',
			text: 'ZLATIBOR',
			link: 'en.wikipedia.org/wiki/Zlatibor'
		},
		{name: 'zlatibor3',
			text: 'ZLATIBOR',
			link: 'en.wikipedia.org/wiki/Zlatibor'
		},
		{name: 'zlatibor4',
			text: 'ZLATIBOR',
			link: 'en.wikipedia.org/wiki/Zlatibor'
		},
		{name: 'tornik-winter',
			text: 'SKI CENTER TORNIK ZLATIBOR',
			link: 'zlatibortornik.com'
		},
		{name: 'tornik-summer',
			text: 'SKI CENTER TORNIK ZLATIBOR',
			link: 'zlatibortornik.com'
		},
		{name: 'dinopark',
			text: 'AVANTURA PARK ZLATIBOR',
			link: 'dinopark.rs'
		},
		{name: 'sirogojno',
			text: 'ETNO SELO SIROGOJNO',
			link: 'sirogojno.rs'
		},
		{name: 'uvack',
			text: 'KANJON UVAC',
			link: 'uvac.org.rs'
		},
		{name: 'tara',
			text: 'PLANINA TARA',
			link: 'tara-planina.com'
		},
		{name: 'mokragora',
			text: 'MOKRA GORA, MEĆAVNIK',
			link: 'mecavnik.info'
		},
		{name: 'sargan',
			text: 'SARGANSKA OSMICA',
			link: 'sarganskaosmica.rs'
		}
		];
}
