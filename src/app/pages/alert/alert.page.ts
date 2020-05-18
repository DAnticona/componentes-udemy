import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.page.html',
	styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
	titulo = 'Alert Page';
	constructor(public alertCtrl: AlertController) {}

	ngOnInit() {}

	async presentAlert() {
		const alert = await this.alertCtrl.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: blah => {
						console.log('Cancelar');
					},
				},
				{
					text: 'OK',
					handler: blah => {
						console.log('Boton OK');
					},
				},
			],
		});

		await alert.present();
	}

	async presentAlertPrompt() {
		const alert = await this.alertCtrl.create({
			header: 'Input',
			subHeader: 'Ingrese su nombre',
			inputs: [
				{
					name: 'txtNombre',
					type: 'text',
					placeholder: 'Ingrese su nombre',
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					},
				},
				{
					text: 'Ok',
					handler: data => {
						console.log('Confirm Ok');
						this.titulo = data.txtNombre;
					},
				},
			],
		});

		await alert.present();
	}
}
