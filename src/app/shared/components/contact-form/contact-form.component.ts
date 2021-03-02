import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {EmailService} from '../../services/email.service';


@Component({
	moduleId: module.id,
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss'],
	providers: [
		EmailService
	],

})

export class ContactFormComponent implements OnInit {
	@ViewChild('f') signupForm: NgForm;
					submitted: any = false;
						name:    '';
						email:   '';
						subject: '';
						bodyMessage: '';
						phone: '';

	constructor(private service: EmailService) {

	}
	subjects = null;
	selectTypeCollapsed = false;

	ngOnInit() {
	}



	onSubmit() {
		this.name = this.signupForm.value.name;
		this.subject = this.subjects;
		console.log(this.subject, this.name);
		this.service.sendMail(this.signupForm.value.name, this.signupForm.value.email, this.subject, this.signupForm.value.phone, this.signupForm.value.bodyMessage)
			.subscribe(() => {

			});
		this.submitted = true;
		setTimeout(() => {
			this.signupForm.resetForm();
			this.submitted = false;
		}, 2000);
	}

	selectDepartment(select: string) {
		this.subjects = select;
	}
}

