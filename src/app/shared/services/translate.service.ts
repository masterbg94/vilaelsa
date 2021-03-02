import {
	AfterViewInit, ChangeDetectorRef, EventEmitter, Injectable, OnChanges, OnDestroy, OnInit,
	Output
} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from 'ng2-translate';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class TranslateServices implements OnInit {

	private subscription: Subscription;
	 langs = [
		'en',
		'sr',
		'ru'
	];
	@Output() languageChange: EventEmitter<any> = new EventEmitter();
	constructor(private activatedRoute: ActivatedRoute,
				private translate: TranslateService)
	{
		this.translate.addLangs(this.langs);
	}
	changeLanguage(lang) {
		this.translate.use(lang);
	}
	ngOnInit()
	{
		this.subscription = this.activatedRoute.queryParams.subscribe(
			(param: any) => {
				const locale = param['locale'];
				if (locale !== undefined) {
					this.translate.use(locale);
				}
			}
		);

	}
}
