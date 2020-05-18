import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-date-time',
	templateUrl: './date-time.page.html',
	styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
	fechaNace: Date = new Date();

	customPickerOptions;
	customDate;

	constructor() {
		this.customPickerOptions = {
			buttons: [
				{
					text: 'Save',
					handler: evento => {
						console.log('Clicked Save!');
						console.log(evento);
					},
				},
				{
					text: 'Log',
					handler: () => {
						console.log('Clicked Log. Do not Dismiss.');
						return false;
					},
				},
			],
		};
	}

	ngOnInit() {}

	camcioFecha(event) {
		console.log(event);
		console.log(new Date(event.detail.value));
	}
}
