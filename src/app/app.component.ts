import {Component, ComponentRef, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {TranslateServices} from './shared/services/translate.service';
import {TranslateService} from 'ng2-translate';
import {NavMenuComponent} from './shared/components/nav-menu/nav-menu.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {FilterComponent} from './shared/components/filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
	isLogin: boolean;
	language: string;

	isAdmin: boolean;

	@ViewChild(NavMenuComponent) navMenuComponent: NavMenuComponent;
	@ViewChild(FooterComponent) footerComponent: FooterComponent;

	constructor(private service: TranslateService, private router: Router) {
		this.router.events.subscribe(re => {
			if (re instanceof NavigationEnd) {
				this.isLogin = re.url === '/login';
				this.isAdmin = re.url === '/admin';
			}
		});

		this.service.use('sr');
		this.service.setDefaultLang('sr');
	}


	ngOnInit() {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = function() {
			const currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById('header').classList.remove('hidden');
			} else {
				document.getElementById('header').classList.add('hidden');
			}
			prevScrollpos = currentScrollPos;
		};
		this.router.events.subscribe(
			() => window.scrollTo(0, 0)
		);
	}

	updateActiveLang(e: any, component: string) {
		if (component === 'nav') {
			this.footerComponent.setLng(e.lng, e.img, e.lang, true);
		} else {
			this.navMenuComponent.setLng(e.lng, e.img, e.lang, true);
		}
	}
}
