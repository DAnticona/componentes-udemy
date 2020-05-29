import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
	selector: 'app-list',
	templateUrl: './list.page.html',
	styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
	users: Observable<any>;
	@ViewChild('lista') lista: IonList;
	constructor(private dataService: DataService, private toastController: ToastController) {}

	ngOnInit() {
		this.users = this.dataService.getUsers();
	}

	async presentToast(message: string) {
		const toast = await this.toastController.create({
			message,
			duration: 2000,
		});
		toast.present();
	}

	favorite(user) {
		this.presentToast('Guardó en favoritos');
		this.lista.closeSlidingItems();
	}
	share(user) {
		this.presentToast('Compartido');
		this.lista.closeSlidingItems();
	}
	borrar(user) {
		this.presentToast('Borrado');
		this.lista.closeSlidingItems();
	}
}
