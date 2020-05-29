import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-segment',
	templateUrl: './segment.page.html',
	styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
	@ViewChild(IonSegment, { static: true }) segment: IonSegment;

	superheroes: Observable<any>;
	publisher = '';

	constructor(private dataSerice: DataService) {}

	ngOnInit() {
		this.segment.value = 'todos';
		this.superheroes = this.dataSerice.getHeroes();

		// console.log(this.segment);
	}

	segmentChanged(event) {
		const valorSegmento = event.detail.value;
		if (valorSegmento === 'todos') {
			this.publisher = '';
			return;
		} else {
			this.publisher = valorSegmento;
		}
		console.log(this.publisher);
	}
}
