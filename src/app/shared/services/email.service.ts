import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {API_BASE} from '../../api.config';

@Injectable()

export class EmailService {
	constructor(private http: HttpClient) {}

	sendMail(name: string, email: string, subject: string, phone: string, bodyMessage: string): any  {
		const formData: FormData = new FormData();

		formData.append('name', name);
		formData.append('email', email);
		formData.append('subject', subject);
		formData.append('phone', phone);
		formData.append('bodyMessage', bodyMessage);
		return this.http.post(`${API_BASE}/mail`, formData);
	}
}
